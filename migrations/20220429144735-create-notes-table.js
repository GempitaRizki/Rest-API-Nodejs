'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('notes', { 
    id : { 
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name : {
      type: Sequelize.STRING
    },
    title : {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  
  }
};
