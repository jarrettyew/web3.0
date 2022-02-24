require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.FUND_PRIVATE_KEY],
    },
  },
};
