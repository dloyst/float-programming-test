'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'BALANCED PARENTHESES: exports balancedParentheses method', t => {
    t.ok( fpt.balancedParentheses, 'has balancedParentheses export' );
    t.equal( typeof fpt.balancedParentheses, 'function', 'balancedParentheses is a function' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for balanced string', t => {
    const input = '(x + y)';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for empty string', t => {
    const input = '';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for string with no parentheses', t => {
    const input = 'x + y';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for balanced brackets', t => {
    const input = '[x + y]';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false  , 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false balanced nested brackets', t => {
    const input = '[[x] + [y]]';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for balanced braces', t => {
    const input = '{x + y}';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false balanced nested braces', t => {
    const input = '{{x} + {y}}';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for separated balanced parens, braces, and brackets', t => {
    const input = '(x + y){i + j}[k + z]';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for nested balanced parens, braces, and brackets', t => {
    const input = '{[(x + y)]}';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for unbalanced separate parens, braces, and brackets', t => {
    const input = '(x + y){i + j[k + z]';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for unbalanced nested parens, braces, and brackets', t => {
    const input = '({[[x]} + [y]])';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );
