/*
 This file will seed the DB with the seed data from the JSON files.

 Note: if the script is run more than once, it should be okey, just som errors saying the database it's already created and the same with the models Factory and Sprocket.
*/

const Factory = require('../api/models/Factory');
const Sprocket = require('../api/models/Sprocket');
const factoryData = require('../data/seed_factory_data.json');
const sprocketData = require('../data/seed_sprocket_types.json');
const { sequelize } = require('../config/database');
const env = require('../config/env');

async function createDatabase() {
  try {
    await sequelize.query(`CREATE DATABASE "${env.database.name}";`);
    console.log(`Database "${env.database.name}" created successfully.`);
  } catch (err) {
    if (err.parent.code !== '3D000') {
      console.error('Error creating database:', err);
    } else {
      console.log(`Database "${env.database.name}" already exists.`);
    }
  }
}



async function createTablesFromModels() {
  try {
    // Create Factory table //TODO: make model sync work
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS factories (
        id SERIAL PRIMARY KEY,
        "chartData" JSON NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table "factories" created successfully.');

    // Create Sprocket table //TODO: make model sync work
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS sprockets (
        id SERIAL PRIMARY KEY,
        teeth INTEGER NOT NULL,
        "pitchDiameter" FLOAT NOT NULL,
        "outsideDiameter" FLOAT NOT NULL,
        pitch FLOAT NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table "sprockets" created successfully.');
  } catch (err) {
    console.error('Error creating tables:', err);
  }
}

const seedDatabase = async () => {
  try {

    await createDatabase();
    await createTablesFromModels();

    // Seed factories
    const factories = factoryData.factories.map(({ factory }) => ({
      chartData: factory.chart_data,
    }));
    await Factory.bulkCreate(factories);

    // Seed sprockets
    const sprockets = sprocketData.sprockets.map(sprocket => ({
      teeth: sprocket.teeth,
      pitchDiameter: sprocket.pitch_diameter,
      outsideDiameter: sprocket.outside_diameter,
      pitch: sprocket.pitch,
    }));
    await Sprocket.bulkCreate(sprockets);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error(err);
  }
};



seedDatabase();