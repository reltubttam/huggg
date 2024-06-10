module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      // brand_id: id
      description: Sequelize.STRING,
      campaign: Sequelize.STRING,
      label: Sequelize.STRING,
      internal_name: Sequelize.STRING,
      integration: Sequelize.STRING,
      price: Sequelize.FLOAT,
      over_18_offer: Sequelize.FLOAT,
      redemption_instructions: Sequelize.STRING,
      image: Sequelize.STRING,
      subtitle: Sequelize.STRING,
      weight: Sequelize.INTEGER,
      recipient_description: Sequelize.STRING,
      tag_group_id: Sequelize.STRING,
      tag_id: Sequelize.STRING,
      open_graph_image: Sequelize.STRING,
      active: Sequelize.INTEGER,
      on_app: Sequelize.INTEGER,
      on_imessage: Sequelize.INTEGER,
      handling_fee: Sequelize.INTEGER,
      sale_price: Sequelize.INTEGER,
      huggg_tag: Sequelize.STRING,
      vat_voucher_type: Sequelize.STRING,
      vat: Sequelize.INTEGER,
      brand_name: Sequelize.STRING,
      brand_weight: Sequelize.INTEGER,
      image_url: Sequelize.STRING,
      claim_image: Sequelize.STRING,
      claim_image_url: Sequelize.STRING,
      imessage_image: Sequelize.STRING,
      imessage_image_url: Sequelize.STRING,
      open_graph_image_url: Sequelize.STRING,

      pivot: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};