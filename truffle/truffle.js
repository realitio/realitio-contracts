module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gasPrice: 2000000000,
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      version: 'v0.4.26',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
