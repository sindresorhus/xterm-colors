import test from 'ava';
import xtermColors from './index.js';

test('main', t => {
	t.true(xtermColors.length > 0);
	t.is(xtermColors[0], '000000');
});
