const express = require( 'express' );
const productsRouter = require( './routes/products' );
const feedbackRouter = require( './routes/feedback' );

const app = express();

app.use( '/products', productsRouter );
app.use( '/feedback', feedbackRouter );