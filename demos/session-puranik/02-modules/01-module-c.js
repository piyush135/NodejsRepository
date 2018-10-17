console.log( 'module C started' );

require( './01-module-a' );
const B = require( './01-module-b' );

console.log( global.z );
console.log( B );

console.log( 'module C ended' );