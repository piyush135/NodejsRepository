const express = require( 'express' );

const router = express.Router();

router.get( '/', function( req, res ) {
    res.send( 'we need to retrieve products from db and send here...' )
});

module.exports = router;