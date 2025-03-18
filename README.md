// 📄 README.md
# MyToken - ERC20 on Linea Testnet

## Overview
This project deploys an ERC20 token on the **Linea Testnet** using Solidity and Hardhat. The deployment is **completely free** by using Linea's testnet faucet.

## Deployment on Linea Testnet
### Prerequisites
- Node.js & npm installed
- Hardhat installed (`npm install --save-dev hardhat`)
- Linea Testnet RPC endpoint (from Alchemy, Infura, or Ankr)
- Private key for deployment (store in `.env` file)
- Free test ETH from [Linea Faucet](https://faucet.linea.build/)

### Steps to Deploy
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB/linea-project.git
   cd linea-project
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables (`.env` file):
   ```env
   PRIVATE_KEY=your_private_key_here
   RPC_URL=https://rpc.goerli.linea.build/
   ```

4. Compile the contract:
   ```sh
   npx hardhat compile
   ```

5. Deploy to Linea Testnet:
   ```sh
   npx hardhat run scripts/deploy.js --network linea_testnet
   ```

## Deployed Contracts
| Contract | Address |
|----------|---------|
| MyToken  | ** 0xA1B2C3D4E5F60789abcdef123456789012345678** |

## License
This project is licensed under the MIT License.
