/**
 * Reference: https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work/10636765#10636765
 */
const http = require( 'http' );
const fs = require( 'fs' );

const server1 = http.createServer(function( req, res ) {
    if( req.method === 'GET' ) {
        res.writeHead( 200, {
            //'Access-Control-Allow-Origin': '*'
            'Access-Control-Allow-Origin': 'http://localhost:4000'
        });
        res.end( 'Server response to GET request' );
    } else if( req.method === 'OPTIONS' ) {
        const acrm = req.headers['access-control-request-method'].toUpperCase();
        if( acrm.indexOf( 'PUT' !== -1 ) || acrm.indexOf( 'GET' ) !== -1 ) {
            res.writeHead( 200, {
                'Access-Control-Allow-Origin': 'http://localhost:4000',
                'Access-Control-Allow-Methods': 'GET, PUT',
                'Access-Control-Allow-Headers': 'Content-Type'
            });
            res.end();
        }
    } else if( req.method === 'PUT' ) {
        res.writeHead( 200, {
            'Access-Control-Allow-Origin': 'http://localhost:4000'
        });
        res.end( 'Server response to PUT request' );
    }

});

server1.listen( 3000 );

const server2 = http.createServer(function( req, res ) {
    const file = fs.createReadStream( './07-index.html' );
    res.writeHead( 200, {
        'Content-Type': 'text/html'
    });
    file.pipe( res );
});

server2.listen( 4000 );