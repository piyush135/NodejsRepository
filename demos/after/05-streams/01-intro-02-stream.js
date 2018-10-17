const fs = require( 'fs' );

const file = fs.createReadStream( './01-intro-02-stream.js' );

let contents = new Buffer(0);
file.on( 'data', function( chunk ) {
    // process.stdout.write( chunk );
    contents = Buffer.concat( [ contents, chunk ] );
});

file.on( 'error', function( err ) {
    console.log( err.message );
});

file.on( 'close', function() {
    console.log( contents.toString() );
});