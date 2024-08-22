const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class UserLike extends Model {}

UserLike.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'products', key: 'id' },
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'userLike',
  indexes: [
    {
      unique: true,
      fields: ['userId', 'productId'],
    }
  ]
})

module.exports = UserLike