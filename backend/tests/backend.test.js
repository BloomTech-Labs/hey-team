const expect = require('chai').expect;
const assert = require('assert');
const mongoose = require('mongoose');
const Promise = require("bluebird");
const Account = require('../api/models/accountModel');

mongoose.Promise = require('bluebird');
Promise.promisifyAll(require("mongoose"));


describe('account records', function() {
  //Test Setup
	let newGuy;
	beforeEach(done => {
    newGuy = new Account({
      owner: {
        name: 'Bob'
			}
    });
    let promise = newGuy.save();
    assert.ok(promise instanceof Promise);
    
    promise.then((doc) => {
      assert.equal(doc.owner.name, 'Bob');
      console.log("Hey!", doc,owner.name);
    });
    console.log("BOP!", newGuy);
    done();
	});

  
	// Tests
	// it('Update one record in the database', function(done) {
	// 	// Account.findOneAndUpdate(
	// 	// 	{ owner: { name: 'Bob' } },
	// 	// 	{ owner: { name: 'Steve' } }
	// 	// ).then(() => {
	// 		Account.findOne({ _id: newGuy._id }).then(result => {
	// 			assert(result.owner.name === 'Bob');
	// 			done();
	// 		});
	// 	// });
	// });
});
