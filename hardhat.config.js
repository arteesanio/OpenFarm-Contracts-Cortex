require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const RPC_URL = process.env.RPC_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.6.6",
  networks: {
    matic: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [PRIVATE_KEY],
    },
    ftm: {
      url: "https://rpcapi.fantom.network/",
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};