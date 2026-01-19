const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Advertisement = sequelize.define('Advertisement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
  },
  position: {
    type: DataTypes.ENUM('sidebar', 'header', 'footer', 'content'),
    defaultValue: 'sidebar',
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  displayOrder: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: true,
  tableName: 'advertisements',
});

module.exports = Advertisement;
