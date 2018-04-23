const { WebClient } = require('@slack/client');

const Workspace = require('../../models/workspaceModel');
const Member = require('../../models/memberModel');

const createMember = async (member, w) => {
  // console.log(member.id, member.real_name);
  // let found = false;
  const found = await Member.findOne({ id: member.id });

  if (found) {
    // console.log('member already exists');
    return;
  } else {
    // console.log('adding new member');
    const newMember = await new Member(member);
    Workspace.findByIdAndUpdate(w._id, {
      $push: { members: newMember._id },
    })
      .then()
      .catch(console.error);
    await newMember.save();
  }
};

module.exports = createWorkspace = async (body, req, res) => {
  // console.log('create workspace');
  const token = body.access_token;
  const web = await new WebClient(token);
  const members = await web.users.list();
  const team = await web.team.info();
  // await web.team.profile
  //   .get()
  //   .then()
  //   .catch(console.error);
  // console.log(team);

  const workspace = await new Workspace({
    info: {
      id: team.team.id,
      name: team.team.name,
      image: team.team.icon.image_230,
    },
  });

  // console.log(members);
  await workspace.save().then(() => {
    console.log('workspace saved');
  });

  members.members.forEach(m => {
    console.log('here');
    const member = {
      workspace: workspace._id,
      id: m.id,
      team_id: m.team_id,
      tz_offset: m.tz_offset,
      tz_label: m.tz_label,
      real_name: m.real_name,
      name: m.name,
      color: m.color,
      image: m.profile.image_512,
      email: m.profile.email,
      // title: m.real_name,
    };
    createMember(member, workspace);
  });

  // return res.redirect(`${process.env.REDIRECT_URI}/?doc_id=${workspace._id}`);
  return res.redirect(
    `https://slack.com/oauth/authorize?client_id=270618182930.333388702161&scope=bot,incoming-webhook,search:read&redirect_uri=https://035404a8.ngrok.io/auth/bot`
  );
};
