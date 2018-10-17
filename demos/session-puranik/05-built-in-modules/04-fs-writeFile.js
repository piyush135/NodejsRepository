const fs = require( 'fs' );
const path = require( 'path' );

let contents = 'Mollit adipisicing ex veniam et cillum adipisicing cupidatat amet ullamco aute. Eiusmod ipsum adipisicing excepteur dolor nostrud tempor enim excepteur consectetur est dolore. Do incididunt mollit do sunt quis deserunt ex.';

fs.writeFile( path.join( __dirname, 'abc.txt' ), contents, function( err ) {
    if( !err ) {
        console.log( 'file written' );
    }
});