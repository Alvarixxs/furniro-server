const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('products', 'range', {
      type: DataTypes.TEXT,
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('products', 'range')
  },
}