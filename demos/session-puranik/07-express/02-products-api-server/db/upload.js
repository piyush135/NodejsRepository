const mongoose = require( 'mongoose' );
const Product = mongoose.model( 'Product' ); // no need to import from Product.js and use - mongoose can give you the model given the model name
const chalk = require( 'chalk' );

// drop db
require( './drop' );

const products = require( './seed.json' ).products;

for( let i = 0; i < products.length; i++ ) {
    let product = new Product( products[i] );

    product.save(function( err, insertedProduct ) {
        if( err ) {
            console.log( chalk.red( 'Product with id = ' + product.id + ' was not inserted' ) );
            return;
        }

        console.log( chalk.yellow( 'Product with id = ' + product.id + ' was inserted. The generated id is ' + insertedProduct._id ) );
    });
}