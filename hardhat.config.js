require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.18",
    networks: {
        linea_testnet: {
            url: process.env.RPC_URL,
            accounts: [process.env.PRIVATE_KEY]
        }
    }
};
