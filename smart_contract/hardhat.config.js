// https://eth-goerli.g.alchemy.com/v2/5_bxnzebrf6T5c6wOXd9DdV-AEFjDcai

// require("@nomicfoundation/hardhat-chai-matchers");
// require("@nomiclabs/hardhat-ethers");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/5_bxnzebrf6T5c6wOXd9DdV-AEFjDcai',
      accounts: ['0ba282eeeedc2179abad97a7f5e7a3d601ac617528047056b2c8034e41f15d40'],
    }
  }
}
