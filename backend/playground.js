console.log(0);

const ham = async () => {
  let stdin = process.openStdin();

  let promise = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('done!'), 1000);
    stdin.addListener('data', d => {});
    process.exit(0);
  });

  let result = await promise;

  console.log('awaited');
};

ham();
// ham().then(() => console.log(2));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });

//   let result = await promise; // wait till the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

/*
https://slack.com/api/oauth.access?client_id=270618182930.333388702161&client_secret=8a86f76a3e4f7de24fae4dab9397848b&code=270618182930.335568946034.2631e8204f2551b0e84ded11d2aa1706445d4e14886df9bc96efbf5da3e3cab3
*/

// {
//   "ok": true,
//   "access_token": "xoxp-154966377728-243206362375-335738147301-c373832eb49d5477f7230b7cb295f514",
//   "scope": "identify,bot,incoming-webhook,search:read,identity.basic",
//   "user_id": "U7562ANB1",
//   "team_name": "Lambda School Students",
//   "team_id": "T4JUEB3ME",
//   "incoming_webhook": {
//       "channel": "@davdaarn",
//       "channel_id": "D73HM2H3K",
//       "configuration_url": "https://lambdaschoolstudents.slack.com/services/B9VMVG3PX",
//       "url": "https://hooks.slack.com/services/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"
//   },
//   "bot": {
//       "bot_user_id": "U9VFGKMJP",
//       "bot_access_token": "xoxb-335526667635-qndUF8I2RhivCGA0naMbt7Go"
//   }
// }

// {
//   "ok": true,
//   "access_token": "xoxp-270618182930-333672065634-333966161058-b1a3c96692eec2b397bb3c614572c67f",
//   "scope": "identify,bot,incoming-webhook,search:read,identity.basic",
//   "user": {
//       "name": "David Long",
//       "id": "U9TKS1XJN"
//   },
//   "team": {
//       "id": "T7YJ65CTC"
//   }
// }

// {
//   "ok": true,
//   "access_token": "xoxp-154966377728-243206362375-335738147301-c373832eb49d5477f7230b7cb295f514",
//   "scope": "identity.basic",
//   "user": {
//       "name": "David Long",
//       "id": "U7562ANB1"
//   },
//   "team": {
//       "id": "T4JUEB3ME"
//   }
// }

// {
//   "ok": true,
//   "access_token": "xoxp-270618182930-333672065634-333966161058-b1a3c96692eec2b397bb3c614572c67f",
//   "scope": "identify,bot,commands,incoming-webhook,search:read,identity.basic",
//   "user_id": "U9TKS1XJN",
//   "team_name": "3Dice Job",
//   "team_id": "T7YJ65CTC",
//   "incoming_webhook": {
//       "channel": "@davdaarn",
//       "channel_id": "D9TP7PBT7",
//       "configuration_url": "https://3dicejob.slack.com/services/B9US5Q1UG",
//       "url": "https://hooks.slack.com/services/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"
//   },
//   "bot": {
//       "bot_user_id": "U9U3H1WNR",
//       "bot_access_token": "xoxb-334119064773-U6lf4TG13OrIhJm2IvrX1Uvw"
//   }
// }
