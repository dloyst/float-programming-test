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

  let matched = true;

	if (typeof input !== 'string' || input === '') return !matched;
	if (input.search(/[()]/) === -1) return !matched;

	//use regex to grab all parens, brackets, and braces
  let parens = input.split('').filter(char => {
    return /[()\[\]{}]/g.test(char);
  });

  let closings = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  let unmatchedOpen = [];
  
  //iterate through parens, pushing open elements to unmatchedOpen
  //if element is 'closing', test it against last element in unmatchedOpen
  for (let i = 0; i < parens.length; i++) {

  	//use this variable to fail fast
    if (!matched) return false;

    let current = parens[i];
    if (current in closings) {
      unmatchedOpen[unmatchedOpen.length - 1] === closings[current] ? 
        unmatchedOpen.pop() :
        matched = !matched;
    } else unmatchedOpen.push(current);
  }
  
  //if unmatchedOpen is empty, we've matched everything
  return unmatchedOpen.length < 1 ? matched : !matched;
};