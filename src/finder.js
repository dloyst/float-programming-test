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

	const truthyValues = [];
	
	if (!Array.isArray(input)) return truthyValues;
	if (typeof test !== 'function') return truthyValues;

  for (let i = 0; i < input.length; i++) {
    if (!Array.isArray(input[i]) && typeof input[i] !== 'object') {
      if (test(input[i])) truthyValues.push(input[i]);
    }
  }
  return truthyValues;
};