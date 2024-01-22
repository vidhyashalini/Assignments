//Import  Mongoose Module
var mongoose = require('mongoose');

// Connect to Mongodb  database(testDb is database name)
mongoose.connect('mongodb://127.0.0.1:27017/testdb1');

// Create  schema
var Schema = mongoose.Schema;

// Schema properties should be match mongodb collection properites
var ProdtModelSchema = new Schema(
    {   Productno: Number, 
        Productname : String, 	
        productorigin : String   }, 
    { versionKey: false  } );

// Create Model Object	
// "depts"   --- collection name in mongodb
var ProdtModel = mongoose.model('prodt', ProdtModelSchema );

// Exporting DeptModel 
module.exports = ProdtModel;
