'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: finds even numbers', t => {
    const input = [ 'apple', 5, 'bear', 10, ['cat', 12, 'deer', 7], {
        odd: 9, 
        even: 16, 
        word: 'eel'
    }, 19, 20, 'fall' ];
    const result = fpt.deepFinder( input, value => value % 2 === 0 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 10, 12, 16, 20 ], 'result is correct' );
    t.notEqual( result, [ 10, 12, 20 ], 'result does not include only values from nested arrays' );
    t.notEqual( result, [ 10, 16, 20 ], 'result does not include only values from nested objects' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array when input is undefined', t => {
    const input = [];
    const result = fpt.deepFinder( input, value => value % 2 === 0 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array when input is null', t => {
    const input = [];
    const result = fpt.deepFinder( input, value => value % 2 === 0 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array when input is not an array', t => {
    const input = 'hello world';
    const result = fpt.deepFinder( input, value => value % 2 === 0 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array when test is not a function', t => {
    const input = [ 'apple', 'bear', 10, ['cat', 'deer', 15], {
        f: 'fish',
        g: 'goat',
        even: 16
    }, 'horse', 20];
    const result = fpt.deepFinder( input, 'hello world' );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );