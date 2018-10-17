// advantages of promise
// code security
// no callback hell problem in case of series of asynchronous tasks
function add( x, y ) {
    const promise = new Promise(function( resolve, reject ) {
        // console.log( 'inside function passed to promise constructor' );
        // console.log( resolve, reject );
        
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( new Error( 'inputs are not numbers' ) );
        }

        setTimeout(function() {
            const result = x + y;
            resolve( result );
        }, 2000);
    });
    return promise;
}

// callback hell
// const promiseForAResult = add( 'hello', 15 );
const promiseForAResult = add( 10, 15 );

promiseForAResult
    .then(function( result ) {
        console.log( 'result = ', result );
        // return 1;
        return add( result, 40 );
    })
    .then(function( result ) {
        console.log( 'result = ', result );
        return add( result, 80 );
    })
    .then(function( result ) {
        console.log( 'result = ', result );
        throw new Error( 'some error' );
    })
    .catch(function( err ) {
        console.log( 'error = ', err.message )
    });

// Promise.all( array_of_promise )
Promise.all(
    [
        add( 10, 15 ),
        add( 20, 25 ),
        add( 30, 35 )
    ]
).then(function( results ) {
    console.log( results );
}).catch(function( err ) {
    console.log( err );
});

console.log( 'end of script' );