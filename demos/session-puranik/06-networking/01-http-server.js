const http = require( 'http' );

const server = http.createServer();

server.on( 'request', function( req, res ) {
    // request object properties
    console.log( req.url );
    console.log( req.headers );

    let buffer = Buffer.alloc(0);
    req.on( 'data', function( chunk ) {
        buffer = Buffer.concat( [ buffer, chunk ] );
    });
    req.on( 'close', function( err ) {
        console.log( buffer );
    });

    res.write( 'Hello' ); // res is a writable stream
    res.end( 'World!' );
});

server.listen( 3000 );
server.timeout = 20000;

server.on( 'listening', function( err ) {
    if( err ) {
        console.log( 'error starting the server' );
        return;
    }
    console.log( 'started server' );
});