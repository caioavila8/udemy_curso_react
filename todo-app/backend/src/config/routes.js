const express = require('express')

module.exports = function(server){

  const routes = express.Router();
  server.use('/api', routes)


  const todoService = require('../api/todo/todoServer')
  todoService.register(routes, '/todos')
}
