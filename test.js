import test from 'ava';
import m from './';

test('should be true', t => {
	t.true(m(153));
	t.true(m(370));
	t.true(m(371));
	t.true(m(407));
	t.true(m(1634));
	t.true(m(8208));
	t.true(m(4679307774));
});

test('should be false', t => {
	t.false(m(154));
	t.false(m(471414));
	t.false(m(88));
	t.false(m(100));
});
