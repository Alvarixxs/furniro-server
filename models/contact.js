const {Model, DataTypes} = require("sequelize");

const {sequelize} = require("../util/db");

class Contact extends Model {}

Contact.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  subject: {
    type: DataTypes.TEXT,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'contact'
})

module.exports = Contact