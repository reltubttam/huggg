module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.createTable('brands', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
      
      name: Sequelize.STRING,
      internal_name: Sequelize.STRING,
      logo: Sequelize.STRING,
      colour: Sequelize.STRING,
      success: Sequelize.STRING,
      share: Sequelize.STRING,
      weight: Sequelize.INTEGER,
      expiry: Sequelize.INTEGER,
      website: Sequelize.STRING,
      integration_id: Sequelize.INTEGER,
      user_id: Sequelize.STRING,
      email: Sequelize.STRING,
      vat: Sequelize.INTEGER,
      faq: Sequelize.STRING,
      description: Sequelize.STRING,
      redeem: Sequelize.STRING,
      location_text: Sequelize.STRING,
      map_pin_url: Sequelize.STRING,
      consolidated: Sequelize.INTEGER,
      default_location_description_markdown: Sequelize.STRING,
      logo_url: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('brands');
  }
};