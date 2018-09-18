// Allows us to use ES6 in our migrations and tests.
require("babel-register");

var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "penumonic here";

module.exports = {
	networks: {
		ropsten: {
			provider: function() {
				return new HDWalletProvider(
					mnemonic,
					"https://ropsten.infura.io/<code>",
					0
				);
			},
			gas: 2900000,
			network_id: 3
		}
	}
};
