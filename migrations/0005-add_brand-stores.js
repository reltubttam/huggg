module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.createTable('brand-stores', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,

      brand_id: Sequelize.UUID,
      store_id: Sequelize.UUID,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('brand-stores');
  }
};