const Account = require('../models/accountModel');

const findUsers = async (req, res) => {
  const { a_id, searchTerm } = req.body;
  const regex = new RegExp(`${searchTerm}`, 'i');
  const account = await Account.findById(a_id);
  const searchResult = [];
  // if (searchTerm.length > 2) {
  account.team.members.forEach(m => {
    if (m.profile.real_name.match(regex)) {
      searchResult.push({
        name: m.name,
        real_name: m.real_name,
        user_id: m.id,
        avatar: m.profile.image_192,
        title: m.real_name,
        image: m.profile.image_192,
      });
    }
  });
  // }
  console.log(searchResult);
  res.json(searchResult);
};

module.exports = {
  findUsers,
};
