// what is the order of outputs?
function add( x, y, cb ) {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        process.nextTick(function() {
            throw new Error( 'inputs are not numbers' );
        });
    }

    setTimeout(function() {
        const result = x + y;
        // return result;
        cb( result );
    }, 2000);
}

const result = add( 'hello', 15, function( result ) {
    console.log( 'result = ', result );
});

console.log( 'end of script' );