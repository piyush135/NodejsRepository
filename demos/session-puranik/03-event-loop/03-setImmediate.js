console.log( 1 );

setImmediate(function() {
    console.log( 2 );
});

console.log( 3 );

setImmediate(function() {
    console.log( 4 );
});

console.log( 5 );