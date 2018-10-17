const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer(function( req, res ) {
    console.log( 'Server request URL = ', req.url );
    console.log( 'Server request headers = ', req.headers );

    const parsedUrl = url.parse( req.url, true );
    console.log( parsedUrl );

    const strNumbers = parsedUrl.query.numbers;

    if( strNumbers ) {
        const numbers = strNumbers.split( ',' );
        console.log( numbers );
        const sum = numbers.reduce( ( acc, n ) => acc + +n, 0 );
        res.end( sum.toString() );
    } else {
        res.writeHead( 400 );
    }
});

server.listen( 4000, function( err ) {
    console.log( 'server can be accessed at http://localhost:4000/' );
});