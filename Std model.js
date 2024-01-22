//Import  Mongoose Module
var mongoose = require('mongoose');

// Connect to Mongodb  database(testDb is database name)
mongoose.connect('mongodb://127.0.0.1:27017/testdb2');

// Create  schema
var Schema = mongoose.Schema;

// Schema properties should be match mongodb collection properites
var StdsModelSchema = new Schema(
    {  StdId: Schema.Types.Number, 
        Sname : Schema.Types.String, 	
        Srank  : Schema.Types.Number,
       Savg: Schema.Types.Number,
       Saddress: Schema.Types.String
    }, 
    { versionKey: false  } );

// Create Model Object	
// "depts"   --- collection name in mongodb
var StdsModel = mongoose.model('Stds', StdsModelSchema );

// Exporting DeptModel 
module.exports = StdsModel;