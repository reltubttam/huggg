const rawBrands = require('../data/brands.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const brandProducts = []
    const brandStores = []
    const brands = rawBrands.data.map(brand => {
      brand.products.forEach(product_id => {
        brandProducts.push({
          product_id,
          brand_id: brand.id,
          consolidated: false,
        });
      });
      brand.consolidated_products.forEach(product_id => {
        brandProducts.push({
          product_id,
          brand_id: brand.id,
          consolidated: true,
        });
      });
      
      brand.stores.forEach(store_id => {
        brandStores.push({
          store_id,
          brand_id: brand.id,
          consolidated: true,
        });
      });
      const newBrand = {...brand};
      delete newBrand.products
      delete newBrand.consolidated_products
      delete newBrand.stores

      return newBrand;
    });

    await queryInterface.bulkInsert('brands', brands);
    await queryInterface.bulkInsert('products', rawBrands.embedded.products.map(product => {
      const newProduct = {
        ...product,
        pivot: JSON.stringify(product.pivot || {})
      }
      delete newProduct.brand_id

      return newProduct
    }));
    await queryInterface.bulkInsert('stores', rawBrands.embedded.stores.map(store => {
      const newStore = {...store};
      delete newStore.latitiude;
      return newStore
    }));
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