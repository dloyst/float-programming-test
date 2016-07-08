'use strict';

/*
 * fizzBuzz
 * 
 * Takes an input length and returns an array of the specified length
 * where the values are:
 *  1) the index + 1, eg: [ 1, 2 ], array[ 0 ] === 1, array[ 1 ] === 2
 *  2) values that would be multiples of 3 are replaced with 'fizz', eg: [ 1, 2, 'fizz' ]
 *  3) values that would be multiples of 5 are replaced with 'buzz', eg: [ 1, 2, 'fizz', 4, 'buzz' ]
 *  4) values that would be multiples of both 3 and 5 are replaced with 'fizzbuzz', eg: [ 1, 2, 'fizz', ... 14, 'fizzbuzz' ] 
 *
 * Eg:
 * 
 *   input: 10
 *   returns: [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ]
 * 
 */
module.exports = ( length ) => {

	// stack for output
	const fizzBuzzArray = [];

	// edge cases making sure arguments are proper type
	if (typeof length !== 'number' || length < 1) return fizzBuzzArray;

	// start at 1 so no 0's, and loop up to length value
	for (let i = 1; i <= length; i++) {

		// variable that will be pushed to stack
		// start as string so we can add fizz and/or buzz if needed
		let testInput = '';

		// % 3 first so if we need both 'fizz' and 'buzz', we get 'fizzbuzz' in correct order
		if (i % 3 === 0) testInput += 'fizz';
		if (i % 5 === 0) testInput += 'buzz';

		// if no string needed, just push element, which happens to be the index
		fizzBuzzArray.push(testInput === '' ? i : testInput);
	}

	return fizzBuzzArray;

};