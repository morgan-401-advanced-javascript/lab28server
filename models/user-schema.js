'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const roles = require('./roles-schema');

/**
 * The schema definition for a user record
 * @type {mongoose.Schema}
 */
const users = new mongoose.Schema({
  username: { type: String, required: true},
  password: { type: String, required: true, unique: true  },
  email: { type: String },
  tasks: { type: Array }
  ,
},
{ toObject: {virtuals: true}, toJSON: {virtuals: true}});

users.virtual('virtual_task', {
  ref: 'tasks',
  localField: 'task',
  foreignField: 'task',
  justOne: true,
});
users.pre('findOne', function(){
  this.populate('virtual_task');
});
users.pre('save', async function(){
  this.password = await bcrypt.hash(this.password, 10);
});
/**
 * Compares plain text password with stored hashed password with individual user record
 * @param {string} plainTextPassword password to check in string format
 * @returns {boolean} -true or false depending on if passwords match
 */
users.methods.comparePassword = async function(plainTextPassword){
  return  await bcrypt.compare(plainTextPassword, this.password);

};

users.methods.generateToken = function(timeout){

  let expiry = Math.floor(Date.now()/1000) + 60 * 60;
  if(parseInt(timeout)) expiry = Math.floor(Date.now()/1000) + parseInt(timeout);

  return jwt.sign({data: {id: this._id}, exp: expiry}, process.env.JWT_SECRET);

};

users.methods.can =  function(capability){
  return this.virtual_role.capability.includes(capability);

};



/**
 * Exporting a mongoose model generated from the above schema, statics, methods and middleware
 * @type {mongoose model}
 */
module.exports = mongoose.model('users', users);