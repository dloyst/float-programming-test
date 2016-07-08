'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */

 //I made this function to check if all parentheses, brackets, and braces are balanced
 //It will still return false if no parentheses are present
 /*But it will run a full balance check and still return false if
   parentheses are balanced, but others braces and brackets are not */

module.exports = ( input ) => {

	// boolean that will determine output
  let matched = true;

  // edge cases that will assure input is a string and there is at least one "(" or ")" present
	if (typeof input !== 'string' || input === '') return !matched;
	if (input.search(/[()]/) === -1) return !matched;

	// use regex to grab all parens, brackets, and braces
  let parens = input.split('').filter(char => {
    return /[()\[\]{}]/g.test(char);
  });

  // stack that will take in only openings
  let unmatchedOpen = [];

  // will use this to compare end of stack to current element
  let closings = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  for (let i = 0; i < parens.length; i++) {

  	//use this variable to fail fast
    if (!matched) return false;

    let current = parens[i];

    // check if current element is a 'closing' character
    // if not, push 'opening' character to stack
    if (current in closings) {

    	// match end of stack with 'closing' character opposite
      unmatchedOpen[unmatchedOpen.length - 1] === closings[current] ? 

      	// if matched, pop off stack
        unmatchedOpen.pop() :

        // otherwise string is unbalanced and no need to check the rest
        matched = !matched;

    } else unmatchedOpen.push(current);
  }
  
  //if unmatchedOpen is empty, we've matched everything
  return unmatchedOpen.length < 1 ? matched : !matched;
};