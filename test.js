'use strict';
var test = require('ava');
var fn = require('./');

test('should be true', function (t) {
	t.true(fn(153));
	t.true(fn(370));
	t.true(fn(371));
	t.true(fn(407));
	t.true(fn(1634));
	t.true(fn(8208));
	t.true(fn(4679307774));
	t.end();
});

test('should be false', function (t) {
	t.false(fn(154));
	t.false(fn(471414));
	t.false(fn(88));
	t.false(fn(100));
	t.end();
});
