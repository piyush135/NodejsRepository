const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer(function( req, res ) {
    res.writeHead( 200, {
        'Content-Type': 'text/plain'
    });
    const stream = fs.createReadStream( __dirname + '/big-file.txt' );
    // fs.readFile( __dirname + '/big-file.txt', 'utf-8', function( err, contents ) {
    //     // res.end( contents );
    // });
    stream.pipe( res );
});

server.listen( 3000, function( err ) {
    if( err ) {
        console.log( 'Error starting the server', err );
    }

    console.log( 'Server address is localhost:3000' );
});