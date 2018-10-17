console.log( 'module A started' );

const A = require( "01-module-b.js" );

console.log( "A.x = ", A.x ); // accessible
console.log( "A.y = ", A.y ); // not accessible
console.log( "global.z = ", global.z ); // accessible

// Exercise: Create module-c and require module-a within it - try accessing global.z within module-c
console.log( 'module A ended' );