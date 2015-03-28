// see what is `this` in node environment
var assert = require('assert');

function gFunc(){
  //  b is just a local var
  var b = 123;
  // this should be golabl or sth?
  this.x = 123;
  console.log('this is ', this);


}

// see what is this
gFunc();

// check x is global while b is not defined in global
assert.equal(x, 123, 'x is global because using this');
assert.equal(true,typeof b === 'undefined',
  'b is undefined because it is local var in func');
