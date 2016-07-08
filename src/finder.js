'use strict';

/*
 * finder
 * 
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 * 
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {

	// stack for elements that return true
	const truthyValues = [];
	
	// edge cases making sure arguments are proper type
	if (!Array.isArray(input)) return truthyValues;
	if (typeof test !== 'function') return truthyValues;

	// iterate through input
  for (let i = 0; i < input.length; i++) {

  	// and ignore if element is array or object
    if (!Array.isArray(input[i]) && typeof input[i] !== 'object') {

  		// push to stack, only if callback returns true
      if (test(input[i])) truthyValues.push(input[i]);
    }
  }
  
  return truthyValues;
};