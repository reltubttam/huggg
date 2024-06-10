module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.createTable('brand-products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,

      brand_id: Sequelize.UUID,
      product_id: Sequelize.UUID,
      consolidated: Sequelize.BOOLEAN
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('brand-products');
  }
};