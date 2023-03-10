const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Welcome to my fumbling mess',
  },
  //Imagine I'll have to keep changing this to the current render link\
  //Also change it in line 8 on swagger-output.js
  host: 'https://cse-341-l4.onrender.com',
  //host: 'localhost:3000',

  //this is originally  http but maybe I'll have to change it to https?
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);