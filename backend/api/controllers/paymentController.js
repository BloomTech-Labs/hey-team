const stripe = require('stripe')(process.env.stripeSecretKey);
const Workspace = require('../models/workspaceModel');
const colors = require('colors');

const payment = async (req, res) => {
  const { w_id, response } = req.body;
  console.log(response);
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    description: '$9.99 for 30 day subscription',
    source: w_id,
  });
  console.log(source);
  req.user.credits += 9.99;
  const user = await req.user.save();
  Workspace.findByIdAndUpdate(
    { id: w_id },
    {
      $set: { paid: true },
    }
  );
  res.send(user);
};

module.exports = {
  payment,
};
