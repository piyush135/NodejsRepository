const express = require( 'express' );

const app = express();

app.use( '/admin', express.static( __dirname + '/admin' ) );
app.use( /* /^admin/ */express.static( __dirname + '/public' ) );

app.listen( 3000 );