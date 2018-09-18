require("dotenv").config();
require("babel-register");

var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
	networks: {
		ropsten: {
			provider: function() {
				return new HDWalletProvider(
					process.env.MNEMONIC,
					"https://ropsten.infura.io/v3/" + process.env.INFURA_KEY,
					0
				);
			},
			gas: 2900000,
			network_id: 3
		}
	}
};
