require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_pqWdfOrdFRrlg2TBNbZHnDkiY4Msnxk',
      accounts: ['dd4035324f530523fb8383c4369788b82d4f68f271a6b065085d9b2565ed9006'],
    },
  },
};
