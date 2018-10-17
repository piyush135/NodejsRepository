const express = require( 'express' );

router = express.Router();

router.get( '/', function( req, res ) {
    res.end( 'all products to be sent' );
});

router.get( '/:id', function( req, res ) {
    res.end( ' product to be sent' );
});

router.post( '/', function( req, res ) {
    res.end( 'product to be added' );
});

module.exports = router;

// similarly create feedback router file (say routes/feedback.js)