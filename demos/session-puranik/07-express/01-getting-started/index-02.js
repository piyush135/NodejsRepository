const express = require( 'express' );

const app = express();

function requestLogger( req, res, next ) {
    // do the task
    console.log( req.url );
    req.receivedAt = new Date();
    // foo(); // uncomment to see that error handling middleware gets executed
    next();
    console.log( 'end of requestLogger' );
}

function userAgentLogger( req, res, next ) {
    // log the browser details
    console.log( req.headers['user-agent'] );
    // always call next
    next();
    console.log( 'end of userAgentLogger' );
}

app.use( requestLogger );
app.use( userAgentLogger );

app.get( '/', function( req, res ) {
    console.log( req.cookies );

    res.end( req.receivedAt.toString() );
});

// page not found handling middleware
function sendPageNotFound( req, res, next ) {
    res.sendFile( __dirname + '/public/404.html' );
}

app.use( sendPageNotFound );

// error-handling middleware
function sendErrorPage( err, req, res, next ) {
    res.sendFile( __dirname + '/public/500.html' );
}

app.use( sendErrorPage );

app.listen( 5000, function( err ) {
    console.log( err ? 'There was error' : 'Server started' );
});