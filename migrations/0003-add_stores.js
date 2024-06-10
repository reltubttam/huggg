module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.createTable('stores', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      id: Sequelize.UUID,
      brand_id: Sequelize.UUID,
      longitude: Sequelize.FLOAT,
      website: Sequelize.STRING,
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      visible: Sequelize.INTEGER,
      description_markdown: Sequelize.STRING,
      image: Sequelize.STRING,
      image_url: Sequelize.STRING,
      latitude: Sequelize.FLOAT,
      // latitiude: latitude
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stores');
  }
};