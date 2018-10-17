const jwt = require( 'jsonwebtoken' );

const secret = 'shhh...';
const tokenJohn = jwt.sign(
    {
        username: 'John Doe',
        email: 'john.doe@example.com',
        isAdmin: true
    },
    secret
);

const tokenMark = jwt.sign(
    {
        username: 'Mark Anthony',
        email: 'mark.anthony@example.com',
        isAdmin: false
    },
    secret
);

// log encoded tokens
console.log( 'tokenJohn = ', tokenJohn );
console.log( 'tokenMark = ', tokenMark );

// verify encoded tokens
jwt.verify( tokenJohn, secret, function( err, decoded ) {
    console.log( 'decoded tokenJohn = ', decoded );
});

jwt.verify( tokenMark, secret, function( err, decoded ) {
    console.log( 'decoded tokenMark = ', decoded );
});

// jwt.decode( tokenJohn, secret, function( err, ))