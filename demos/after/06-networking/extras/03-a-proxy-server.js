const httpProxy = require( 'http-proxy' );
const http = require( 'http' );
const url = require( 'url' );

const proxyServer = httpProxy.createProxyServer({
    prependPath: true
});

const proxyServerContainer = http.createServer(function( req, res ) {
    console.log( 'Proxy server request URL = ', req.url );

    const parsedUrl = url.parse( req.url, true );
    console.log( parsedUrl );
    
    if( parsedUrl.query.operation === 'add' ) {
        proxyServer.web( req, res, {
            target: 'http://localhost:4000/api/'
        });
    } else if( parsedUrl.query.operation === 'multiply' ) {
        proxyServer.web( req, res, {
            target: 'http://localhost:5000/api/'
        });
    }
});

proxyServer.on( 'proxyReq', function( proxyReq, req, res, options ) {
    // console.log( '***** proxyReq *****' );
    // console.dir( proxyReq, { depth : 0 } );
    // console.log( '***** req *****' );
    // console.dir( req, { depth : 0 } );
    console.log( 'req.headers = ', req.headers );
    proxyReq.setHeader( 'X-Special-Proxy-Header', 'hello-i-am-the-proxy-server' );
});

proxyServerContainer.listen( 3000, function( err ) {
    console.log( 'proxy server can be accessed at http://localhost:3000/' );
});