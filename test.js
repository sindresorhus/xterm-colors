'use strict';
var test = require('ava');
var xtermColors = require('./');

test(function (t) {
	t.assert(xtermColors.length > 0);
	t.assert(xtermColors[0] === '000000');
});