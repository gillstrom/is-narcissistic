'use strict';
var assert = require('assert');
var isNarcissistic = require('./');

it('should be true', function () {
	assert.strictEqual(isNarcissistic(153), true);
	assert.strictEqual(isNarcissistic(370), true);
	assert.strictEqual(isNarcissistic(371), true);
	assert.strictEqual(isNarcissistic(407), true);
	assert.strictEqual(isNarcissistic(1634), true);
	assert.strictEqual(isNarcissistic(8208), true);
	assert.strictEqual(isNarcissistic(4679307774), true);
});

it('should be false', function () {
	assert.strictEqual(isNarcissistic(154), false);
	assert.strictEqual(isNarcissistic(471414), false);
	assert.strictEqual(isNarcissistic(88), false);
	assert.strictEqual(isNarcissistic(100), false);
});
