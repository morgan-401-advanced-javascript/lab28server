'use strict';

const Model = require('./model.js');
const schema = require('./task-schema.js');

/**
 * A class representing the task model in our database.
 * This is in fact a wrapper for our mongoose model
 * defined in task-schema.js
 */
class Task extends Model {
  /**
   * The constructor of our model
   * @return {Task}  A newly created Task object
   */
  constructor() {
    super(schema);
  }

}

module.exports = Task;