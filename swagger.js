const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for the sprockets and factories services',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
    components: {
        schemas: {
          Factory: {
            type: 'object',
            required: ['name', 'location'],
            properties: {
              id: {
                type: 'integer',
                description: 'The auto-generated id of the factory',
              },
              name: {
                type: 'string',
                description: 'The name of the factory',
              },
              location: {
                type: 'string',
                description: 'The location of the factory',
              },
            },
          },
          Sprocket: {
            type: 'object',
            required: ['teeth', 'pitchDiameter', 'outsideDiameter', 'pitch'],
            properties: {
              id: {
                type: 'integer',
                description: 'The auto-generated id of the sprocket',
              },
              teeth: {
                type: 'integer',
                description: 'The number of teeth of the sprocket',
              },
              pitchDiameter: {
                type: 'number',
                format: 'float',
                description: 'The pitch diameter of the sprocket',
              },
              outsideDiameter: {
                type: 'number',
                format: 'float',
                description: 'The outside diameter of the sprocket',
              },
              pitch: {
                type: 'number',
                format: 'float',
                description: 'The pitch of the sprocket',
              },
            },
          },
        },
      },
  },
  apis: ['./api/routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
