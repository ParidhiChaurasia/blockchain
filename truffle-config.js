require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  

  networks: {
   
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    kovan: {
      provider: () => new HDWalletProvider({ mnemonic : process.env.MNEMONIC, providerOrUrl : `https://kovan.infura.io/v3/${process.env.INFURA_APIKEY}`, addressIndex : 0 ,  numberOfAddresses : 10}),
      network_id: 42,
      gas: 8000000
    }  
    
    
  },

  // contracts_directory = '../contracts/implementations',

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      
      
    }
  },
};
