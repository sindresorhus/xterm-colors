import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m.length > 0);
	t.is(m[0], '000000');
});
