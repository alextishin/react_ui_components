/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the index view
   */

  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.index'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: 'GET',
    path: '/home',
    handler: 'ViewController.index'
  },


  {
    method: 'GET',
    path: '/components',
    handler: 'ViewController.index'
  },


]
