const { processBrands, processProducts, processStores } = require('../dist/lib/seed');

const rawBrands = require('../data/brands.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log(0, rawBrands.data.length)
    const {
      brandProducts,
      brandStores,
      brands
    } = processBrands(rawBrands.data);
    console.log(1, rawBrands.data.length)
    const products = processProducts(rawBrands.embedded.products);
    console.log(2,rawBrands.embedded.products.length, rawBrands.embedded.stores.length )
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