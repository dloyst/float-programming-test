'use strict';

/*
 * deepFinder
 * 
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {

  const truthyValues = [];
	
	if (!Array.isArray(input)) return truthyValues;
	if (typeof test !== 'function') return truthyValues;
	
  findInArray(input, test);
  
  function findInArray(input, test) {
    for (let i = 0; i < input.length; i++) {
      testElement(input[i], test);
    }
  }

  function findInObject(input, test) {
    for (let key in input) {
      testElement(input[key], test);
    }
  }
  
  function testElement(element, test) {

  	//if element is an array, test each element in that array
  	if (Array.isArray(element)) findInArray(element, test);

  	//if element is instead an object, test each enumerable
  	else typeof element === 'object' ?
  		findInObject(element, test) :
  		(
  			
  			//if element is neither an array nor object, run callback on element
  			test(element) ?
  			truthyValues.push(element) : null
  		);
  }
  return truthyValues;
};