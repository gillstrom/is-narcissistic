'use strict';
var numberIsInteger = require('number-is-integer');
var numArr = require('num-arr');

module.exports = function (val) {
	if (!numberIsInteger(val)) {
		throw new TypeError('Expected an integer');
	}

	var arr = numArr(val);
	var sum = 0;

	arr.forEach(function (el) {
		sum += Math.pow(el, arr.length);
	});

	return val === sum;
};
