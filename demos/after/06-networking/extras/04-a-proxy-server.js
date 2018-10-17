const httpProxy = require( 'http-proxy' );
const HttpProxyRules = require( 'http-proxy-rules' );
const http = require( 'http' );
const url = require( 'url' );

const urlRewriteRules = new HttpProxyRules({
    rules: {
        '/add': 'http://localhost:4000/',
        '/multiply': 'http://localhost:5000'
    },
    default: 'http://localhost:4000'
})

const proxyServer = httpProxy.createProxyServer({
    prependPath: true
});

const proxyServerContainer = http.createServer(function( req, res ) {
    console.log( 'Proxy server request URL = ', req.url );

    const parsedUrl = url.parse( req.url, true );
    console.log( parsedUrl );
    
    const target = urlRewriteRules.match( req );
    if( target ) {
        proxyServer.web( req, res, {
            target: target
        });
    } else {
        res.writeHead( 500, {
            'Content-Type': 'text/plain'
        });
        res.end( 'The request URL and path did not match any supported endpoint' );
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