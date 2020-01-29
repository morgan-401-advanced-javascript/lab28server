'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

/**
 * @route POST /signup
 * @param {string} email.query.required - username or email
 * @param {string} password.query.required user password
 * @returns {object} 200 - bearer token
 */
router.post('/signup', (req, res, next) => {

  res.status(200).json({token: 'Bearer ' + req.token});


});


/**
 * @route POST /signin
 * @param {string} email.query.required - username or email
 * @param {string} password.query.required user password
 * @returns {object} 200 - bearer token
 */
router.post('/signin', auth,  async (req, res, next) => {
  res.status(200).json({token: 'Bearer ' + req.token});

});
router.get('/oath', (req, res, next)=>{
    
})
router.get('/oath-data', (req, res, next)=>{

})
router.get('/all-tasks', (req, res, next)=>{

})

module.exports = router;