var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

module.exports = function(app){
  app.route('/')
    .get(indexController.getCities)

  app.route('/city')
    .post(indexController.addCity);

  app.route('/city/delete')
    .post(indexController.deleteCity);
}
