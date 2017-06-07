'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {
  error (req, reply) {
    reply.send(404);
  }

  index (request, reply) {
    reply.view('index')
  }

}
