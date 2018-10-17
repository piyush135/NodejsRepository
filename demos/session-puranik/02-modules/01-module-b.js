console.log( 'module B started' );

let x = 1; // "public"
let y = 2; // "private"
let z = 3;

global.z = z; // "global"

module.exports = {
    "x": x
};

console.log( 'module B ended' );