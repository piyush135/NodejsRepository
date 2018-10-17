const express = require( 'express' );
const multer = require( 'multer' );
const path = require( 'path' );

// var upload = multer({ dest: 'uploads/' });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

function fileFilter( req, file, cb ) {
    console.log( file.fieldname );
    console.log( path.extname( file.originalname ) );

    if( file.fieldname === 'avatar' && path.extname( file.originalname ) === '.md' ) {
        return cb( null, true );
    }

    if( file.fieldname === 'gallery' && path.extname( file.originalname ) === '.json' ) {
        return cb( null, true );
    }

    return cb( null, false );

    // cb( new Error( 'reason' ) ); // use this if you need to indicate error
}

var upload = multer({ storage, fileFilter });

const app = express();

app.use( express.static( path.join( __dirname, 'public' ) ) );
   
var config = upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 8 }
]);
app.post('/profile', config, function (req, res, next) {
    console.log( req.file );
    console.log( req.body );

    res.end( 'Files uploaded' );
});

app.use(function( req, res, next ) {
    res.end( 'Some error occured : ', err.message );
});

app.listen( 3000, function( err ) {
    if( err ) {
        return console.log( 'error starting sever : ', err.message );
    }

    console.log( 'server started' );
});