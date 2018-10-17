const fs = require( 'fs' );

fs.readFile( './03-f.js', function( err, contents ) { // error-first callback ppattern
    if( err ) {
        return console.log( 'error occured reading file : ', err.message );
    }

    console.log( contents );
} );

try {
    let results = fs.readFileSync( './03-f.js' );
} catch( err ) {
    console.log( err );
}

// function calculate( arr, startIndex, endIndex  ) {
//     // process 0 - 100 items of the array
//     setTimeout()
// }

// function calculateBigArray() {
//     setTimeout(function() {
        
//     })
// }

// calculateBigArray( arr )

// Web workers

// child_process