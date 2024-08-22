const {Model, DataTypes} = require("sequelize");

const {sequelize} = require("../util/db");

class Newsletter extends Model {}

Newsletter.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'newsletter'
})

module.exports = Newsletter