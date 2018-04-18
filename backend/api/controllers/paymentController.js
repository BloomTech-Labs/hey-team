const stripe = require('stripe')(process.env.stripeSecretKey);
const Workspace = require('../models/workspaceModel');
const colors = require('colors');

const payment = async (req, res) => {
  const { w_id, token } = req.body;
  // console.log(token);
  const charged = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    description: '$9.99 for 30 day subscription',
    source: token.id,
  });

  // req.user.credits += 9.99;
  // const user = await req.user.save();
  console.log(charged);
  await Workspace.findByIdAndUpdate(w_id, {
    $update: { info: { paid: true } },
  });
  res.send('OK');
};

module.exports = {
  payment,
};
