var express = require('express');
var api = express.Router();

/* GET users listing. */
api.get('/', function(req, res, next) {
  res.send('respond with a resource 1');
});

export default api
