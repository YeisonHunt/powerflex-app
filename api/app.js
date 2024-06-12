const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('../config/database');
const env = require('../config/env');
const { swaggerUi, specs } = require('../swagger');
const { sequelize } = require('../config/database')
const app = express();

// Connect to PostgreSQL
//connectDB();

app.use(bodyParser.json());

// Import Swagger docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Import api routes
const factoriesRoutes = require('./routes/factories.route');
const sprocketsRoutes = require('./routes/sprockets.route');

app.use('/api/factories', factoriesRoutes);
app.use('/api/sprockets', sprocketsRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${env.port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
