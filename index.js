'use strict';
var numArr = require('num-arr');

module.exports = function (val) {
	if (typeof val !== 'number') {
		throw new TypeError('Expected a number');
	}

	var arr = numArr(parseInt(val, 10));
	var sum = 0;

	arr.forEach(function (el) {
		sum += Math.pow(parseInt(el, 10), arr.length);
	});

	return val === sum;
};
