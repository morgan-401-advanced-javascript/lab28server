'use strict'
const mongoose = require('mongoose');
/**
 * The schema definition for a task record
 * @type {mongoose.Schema}
 */
const tasks = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String},
    dateDue: { type: Date },
    priority: { type: Number, required: true, default: 5 },
    isComplete: { type: Boolean, required: true, default: false }

});
/**
 * Exporting a mongoose model generated from the above schema, statics, methods and middleware
 * @type {mongoose model}
 */
module.exports = mongoose.model('tasks', tasks)

