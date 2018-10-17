const express = require( 'express' );

router = express.Router();

// Note: You can also set up router-specific middleware using router.use()

router.get( '/', function( req, res ) {
    res.end( 'all feedback to be sent' );
});

router.get( '/:id', function( req, res ) {
    res.end( ' prfeedbackduct to be sent' );
});

router.post( '/', function( req, res ) {
    res.end( 'feedback to be added' );
});

// to handle all HTTP methods to home path for this router (i.e. /products)
// router.all( '/', function() {

// });

module.exports = router;

// similarly create feedback router file (say routes/feedback.js)