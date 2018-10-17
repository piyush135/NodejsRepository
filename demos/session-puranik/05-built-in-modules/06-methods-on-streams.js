const fs = require( 'fs' );
const path = require( 'path' );

const fileStream = fs.createReadStream( path.join( __dirname, '/01-process.js' ) );

let rawContents = Buffer.alloc(0);
fileStream.on( 'data', function( data ) {
    rawContents = Buffer.concat( [ rawContents, data ] );
});

fileStream.on( 'close', function( err ) {
    if( err ) {
        console.log( 'some error reading the file' );
        return;
    }

    console.log( rawContents.toString() );
});

let writeableFileStream = fs.createWriteStream( 'xyz.txt', { encoding: 'utf8' } );

writeableFileStream.write( 'hello' );
writeableFileStream.end();