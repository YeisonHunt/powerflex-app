const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Factory = sequelize.define('factories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  chartData: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = Factory;