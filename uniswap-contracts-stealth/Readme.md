# Deploy Uniswap V2 to Mode Sepolia Testnet

This is a Hardhat setup to deploy the necessary contracts of Uniswap.

## Get Started

Clone repo:

```
git clone https://github.com/n06ody/stealth-uniswap/uniswap-contracts-stealth/
cd uniswap-contracts-stealth
```

Install packages:

```
npm i
```

Modify the private keys as you wish in the `hardhat.config.js` file.

### Deploy the contracts (Mode Sepolia Testnet):

To deploy the contracts in Mode Sepolia Testnet you can run:

```
npx hardhat run --network modesepolia scripts/deploy-factory.js
```

**Note: the interface works on Mode Sepolia Testnet with the contracts address baked in the SDK. To make sure that the interface works with your deployment you need to modify both the Interface and SDK repos**
