const express = require( 'express' );
const path = require( 'path' );

// 4 objects - Application, Router, Request, Response 
// usually only one application object
// you can build sub-applications using multiple application objects
const app = express();

// req.body gets set to incoming HTTP request body
// req.body can be in JSON format, or it can be urlencoded (what happens when we submit a form)
app.use( express.json() );
app.use( express.urlencoded() );

app.set( 'views', path.join( __dirname, 'templates' ) );
app.set( 'view engine', 'ejs' );

// building sub-applications - please verify syntax
// const appNOrmal = express();
// const apAdmin = express();

// app.use( '/admin', addAdmin );
// app.use( addNormal );
// end of sub-application configuraton

const port = process.env.PORT || 3000;

// GET / - send plain text
app.get( '/', function( req, res ) {
    res.set( 'Content-Type', 'text/html' );
    res.end( 'hello' );
});

// GET /contact - send contact HTML page
app.get( '/contact', function( req, res ) {
    console.log( path.join( __dirname, 'public/contact.html' ) );
    res.sendFile( path.join( __dirname, 'public/contact.html' ) );
});

// /emailids -> json
// /emailids?format=html -> html
app.get( '/emailids', function( req, res ) {
    let isHtml = req.query.format && req.query.format === 'html';
    console.log( req.query );

    if( isHtml ) {
        res.render( 'emailids', {
            emailids: [
                'john.doe@example.com', 'john.doe@gmail.com'
            ]
        });
    } else {
        res.json([
            'john.doe@example.com', 'john.doe@gmail.com'
        ]);
    }
});

app.get( '/add', function( req, res ) {
    let strNumbers = req.query.numbers;
    let numbersArray = strNumbers.split( ',' );
    console.log( numbersArray );
    let result = numbersArray.reduce(function( acc, result ) {
        return acc + parseInt( result );
    }, 0);
    res.end( '' + result );
});

app.get( '/multiply', function( req, res ) {
    let strNumbers = req.query.numbers;
    let numbersArray = strNumbers.split( ',' );
    console.log( numbersArray );
    let result = numbersArray.reduce(function( acc, result ) {
        return acc * parseInt( result );
    }, 1);
    res.end( '' + result );
});

app.get( '/products', function( req, res ) {
    const data = require( './data/seed.json' );
    res.json( data.products );
});

app.get( '/products/:id', function( req, res ) {
    let id = req.params.id;
    if( id < 1 || id > 5 ) {
        res.status(404); // HTTP status code set using res.status()
        res.json({
            status: 'faliure',
            message: 'Prouduct with given id does not exist'
        });
    }

    const data = require( './data/seed.json' );
    res.json( data.products[ - 1] );
});

app.post( '/products', function( req, res ) {
    console.log( req.body );
    res.json( req.body );
});

app.listen( port, function( err ) {
    if( err ) {
        return console.log( 'error starting server' );
    }

    console.log( 'started server' )
});