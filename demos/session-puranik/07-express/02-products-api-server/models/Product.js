const mongoose = require( 'mongoose' );

const ProductSchema = new mongoose.Schema({
    "id": {
        type: Number,
        required: true,

    },
    "name": {
        type: String,
        require: true
    },
    "code": String,
    "releaseDate": String,
    // "releaseDate": {
    //     type: Date,
    //     default: Date.now
    // },
    "description": String,
    "price": {
        type: Number,
        required: true,
        min: 0
    },
    "starRating": {
        type: Number,
        require: true,
        min: 1,
        max: 5
    },
    "imageUrl": String
});

const Product = mongoose.model( 'Product', ProductSchema );

module.exports = Product;