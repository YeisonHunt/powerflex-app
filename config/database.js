const { Sequelize } = require('sequelize');
const env = require('./env');

const sequelize = new Sequelize(env.database.name, env.database.user, env.database.password, {
  host: env.database.host,
  port: env.database.port,
  dialect: 'postgres',
});


const connectDB = async () => {
  try {

    await sequelize.authenticate();
    console.log('PostgreSQL connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };