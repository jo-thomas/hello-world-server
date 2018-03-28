const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const APP = express();
const PORT = 8080;
const HOST = '0.0.0.0';

//express.js swagger-ui middlware function, servers docs at /api-docs using ./swagger.json spec
APP.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//process query params, to expected string
function applyQueryParams(string){
  return function (request, response, next) {
    returnString = string
    if(request.query.uppercase == 'true'){
      returnString = returnString.toUpperCase()
    }

    if(request.query.reverse == 'true'){
      returnString = returnString.split('').reverse().join('')
    }
    next()
  }
}

//GET / should respond "hello world"
APP.get('/', applyQueryParams('hello world'), function(request, response){
  response.send(returnString);
});

//GET /hello should respond "hello"
APP.get('/hello', applyQueryParams('hello'), function(request, response){
  response.send(returnString);
});

//GET /world should respond "world"
APP.get('/world', applyQueryParams('world'), function(request, response){
  response.send(returnString);
});

//Set APP Host and port
APP.listen(PORT, HOST)
console.log(`Listening on port ${PORT}`);
