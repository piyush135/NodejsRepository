const fs = require( 'fs' );

function cb() {
    setTimeout(function() {
        console.log( 1 );
    }, 0 );

    setImmediate(function() {
        console.log( 2 );
    });
}

fs.readFile( __dirname + '/04-setTimeout-setImmedate.js', cb );