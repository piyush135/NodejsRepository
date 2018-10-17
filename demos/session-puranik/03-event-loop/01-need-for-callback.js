// let result; //  global

function add( x, y, cb ) {
    setTimeout(function() {
        console.log( 'function was called' );
        const result = x + y;
        // return result;
        cb( result );
    }, 10000); // 10 seconds is the MINIMUM time after which the function will execute. If runtime is executing some other code in your application, then the call to this function will be delayed
    return 1;
}

console.log( 
    add( 10, 15, function( result ) { 
        console.log( 'result = ', result ); 
    })
);

setTimeout(function() {
    console.log( 'global result = ', result );
}, 11000 );

// takes time
for( let i = 0; i < 100000; i++ ) {
    for( let j = 0; j < 100000; j++ ) {
        ;
    }
}