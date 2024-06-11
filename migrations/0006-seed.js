const { processBrands, processProducts, processStores } = require('../dist/lib/seed');

const rawBrands = require('../data/brands.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {
      brandProducts,
      brandStores,
      brands
    } = processBrands(rawBrands.data);
    const products = processProducts(rawBrands.embedded.products);
    const stores = processStores(rawBrands.embedded.stores)

    await queryInterface.bulkInsert('brands', brands);
    await queryInterface.bulkInsert('products', products);
    await queryInterface.bulkInsert('stores', stores);
    await queryInterface.bulkInsert('brand-products', brandProducts);
    await queryInterface.bulkInsert('brand-stores', brandStores);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('brands', null, {});
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.bulkDelete('stores', null, {});
    await queryInterface.bulkDelete('brand-products', null, {});
    await queryInterface.bulkDelete('brand-stores', null, {});
  }
};