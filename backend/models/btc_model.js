/* models/todo.js */
const mongoose = require('mongoose')
const blockexplorer = require('blockchain.info/blockexplorer');

const getBtcBalances = () => {
	const btcAddressList = [
	  '3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r',
	  '16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk'
	];
	return blockexplorer.getAddress(btcAddressList);
}


// Declare Schema
const TodoSchema = new mongoose.Schema(
  {
    address: { type: String },
    owner: { type: Boolean },
    numOfInput: { type: Number },
    numOfOutput: { type: Number },
    percentageOfTotalMarket: { type: Number }
  },
  { timestamps: true }
);

// Declare Model to mongoose with Schema
const btc_model = mongoose.model('btc_model', TodoSchema)

// Export Model to be used in Node
module.exports = {
btc_model,
getBtcBalances
}
