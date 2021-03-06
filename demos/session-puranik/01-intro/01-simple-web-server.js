// Node.js is good for applications having lot of I/o tasks
// not good for CPU bound tasks
// for proper parallel operations you need to use all cores using either
    // 1. cluster module (built-in)
    // 2. pm2 (third party)

const http = require( 'http' );

const server = http.createServer(function( req, res ) {
    res.end( 'hello' );
    db.query( '', function( results ) { // non-blocking call
        // use the results here
    } )
});

server.listen( 3000, function( err ) {
    if( err ) {
        console.log( 'Error starting the server', err );
    }

    console.log( 'Server address is localhost:3000' );
});

fs.readFile( '', function( contents ) {
    // write code that uses contents
} );