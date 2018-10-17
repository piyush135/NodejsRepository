console.log( 1 );

setImmediate(function() {
    console.log( 2 );
});

// add this callback function immediately after what the event loop is currently doing
process.nextTick(function() {
    console.log( 3 );
});

console.log( 4 );