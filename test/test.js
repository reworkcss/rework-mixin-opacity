'use strict';

var assert = require('assert');
var fs = require('fs');
var opacity = require('../opacity');
var rework = require('rework');

describe('opacity()', function () {
  var expected = fs.readFileSync('test/fixtures/expected.css', 'utf-8').toString().trim();
  var original = fs.readFileSync('test/fixtures/original.css', 'utf-8').toString().trim();
  var actual = rework(original).use(rework.mixin({ opacity: opacity })).toString();

  it('inserts the MS opacity filter and preserves the value tail', function () {
    assert.equal(actual, expected);
  });
});
