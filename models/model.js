'use strict';
const mongoose = require('mongoose');
/**
 * A class representing a data model in our database.
 * This is in fact a wrapper for our mongoose model
 */
class Model {
      /**
   * The constructor of our model
   * @param  {schema}   schema    A generated mongoose model
   * @return {Model}              A newly created Model object
   */
    constructor(schema){
        this.schema = schema;

    }
    //CRUD
      /**
   * Creates a record in our model's collection within MongoDB
   * @param  {object}           record    The record to create
   * @return {Promise<object>}            The record we save to the DB
   */
    create(record){
        //sanitize
        let newRecord = new this.schema(record);
        //save
        return newRecord.save();

    }
      /**
   * Gets a single record based on a provided id
   * @param  {mongoose.Types.ObjectId}  _id    This is the id of the record we're trying to get from the database
   * @return {Promise<object>}                 The found record
   * @return {null}                            If we didn't find a record, we return null
   */
    read(_id){
        //
        if (mongoose.Types.ObjectId.isValid(_id))
        return this.schema.findOne({ _id });
      else return null;

    }
    readFromField(field){
        return 
    }
      /**
   * Updates a specific record with new content
   * @param  {mongoose.Types.ObjectId} _id        The id of the record we want to change
   * @param  {object}                   record    The new data we want our record to be updated to
   * @return {Promise<object>}                    The updated record and its contents
   */
    update(_id, record){
        return this.schema.updateOne({ _id }, record);

    }
      /**
   * Deletes a record in our model's collection within MongoDB
   * @param  {mongoose.Types.ObjectId}  _id   The id of the record we want to delete
   * @return {Promise<object>}                The id of the item deleted
   */
    delete(_id){
        return this.schema.findByIdAndDelete(_id);

    }
}
module.exports = Model;