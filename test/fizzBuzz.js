'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FIZZBUZZ: exports fizzBuzz method', t => {
    t.ok( fpt.fizzBuzz, 'has fizzBuzz export' );
    t.equal( typeof fpt.fizzBuzz, 'function', 'fizzBuzz is a function' );
    t.end();
} );

test( 'FIZZBUZZ: returns a proper array based on input length of 10', t => {
    const result = fpt.fizzBuzz( 10 );

    t.ok( result, 'generated an array of length 10' );
    t.deepEqual( result, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ], 'result is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns a proper array based on input length of 30', t => {
    const result = fpt.fizzBuzz( 30 );

    t.ok( result, 'generated an array of length 30' );
    t.deepEqual( result, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz' ], 'result is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input "null"', t => {
    const result = fpt.fizzBuzz( null );

    t.deepEqual( result, [], 'result is an empty array' );
    t.notEqual( result, [null], 'result is not null' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input "0"', t => {
    const result = fpt.fizzBuzz( 0 );

    t.deepEqual( result, [], 'result is and empty array' );
    t.notEqual( result, [0], 'result is not 0' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input "undefined"', t => {
    const result = fpt.fizzBuzz( 'undefined' );

    t.deepEqual( result, [], 'result is an empty array' );
    t.notEqual( result, ['undefined'], 'result is not undefined' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input of a string', t => {
    const result = fpt.fizzBuzz( 'hello world' );

    t.deepEqual( result, [], 'result is an empty array' );
    t.notEqual( result, ['hello world'], 'result is not the string' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input of a function', t => {
    const result = fpt.fizzBuzz( function() {console.log('hello world');} );

    t.deepEqual( result, [], 'result is an empty array' );
    t.notEqual( result, [function() {console.log('hello world');}], 'result is not the function' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input of a boolean', t => {
    const result = fpt.fizzBuzz( false );

    t.deepEqual( result, [], 'result is an empty array' );
    t.notEqual( result, [false], 'result is not the boolean' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on empty input', t => {
    const result = fpt.fizzBuzz();

    t.deepEqual( result, [], 'result is an empty array' );
    t.notEqual( result, [''], 'result is not the empty string' );
    t.end();
} );

test( 'FIZZBUZZ: returns an empty array based on input of negative number', t => {
    const result = fpt.fizzBuzz( -9 );

    t.deepEqual( result, [], 'result is an empty array' );
    t.notEqual( result, [ -1, -2, 'fizz', -4, 'buzz', 'fizz', -7, -8, 'fizz'], 'result should not be negative numbers')
    t.end();
} );
