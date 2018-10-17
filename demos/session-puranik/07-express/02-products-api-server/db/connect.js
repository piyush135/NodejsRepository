const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/store' );

mongoose.connection.on( 'open', function() {
    console.log( 'connected to store db' );

    // create models
    require( '../models/Product' );

    // upload data
    require( './upload' );
});

mongoose.connection.on( 'error', function() {
    console.log( 'error connecting to store db' );
    process.exit(1);
});