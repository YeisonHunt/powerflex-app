const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Sprocket = sequelize.define('sprockets', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teeth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pitchDiameter: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  outsideDiameter: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  pitch: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Sprocket;