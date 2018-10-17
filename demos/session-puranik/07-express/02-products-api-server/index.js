// setup db connection
require( './db/connect' );

const productsRouter = require( './routes/products' );

const express = require( 'express' );

const app = express();

app.use( '/products', productsRouter );

app.listen( 3000, function( err ) {
    if( err ) {
        return console.log( 'problem startong server');
    }

    console.log( 'server started' );
});