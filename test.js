import test from 'ava';
import fn from './';

test('should be true', t => {
	t.true(fn(153));
	t.true(fn(370));
	t.true(fn(371));
	t.true(fn(407));
	t.true(fn(1634));
	t.true(fn(8208));
	t.true(fn(4679307774));
	t.end();
});

test('should be false', t => {
	t.false(fn(154));
	t.false(fn(471414));
	t.false(fn(88));
	t.false(fn(100));
	t.end();
});
