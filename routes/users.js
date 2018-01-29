var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

module.exports = function(app){
  app.route('/login')
    .post(userController.login)

  app.route('/logout')
    .post(userController.logout)
}
