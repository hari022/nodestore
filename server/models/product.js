const mongoose  = require('mongoose');
const  Schema = mongoose.Schema;

const productSchema = new  Schema({
    "Name" : String,
    "Description" : String,
    "OS" :String,
    "Price" : String,
    "cartQuantity" : Number,
    "img" : String
});

module.exports = mongoose.model('product', productSchema, 'iDroidStore');