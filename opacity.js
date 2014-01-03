'use strict';

/**
 * Provide IE 8 filter for "opacity"
 */

module.exports = function opacity(val) {
  var parts = val.split(/\s+/);
  var num = parseFloat(parts.shift());
  var perc = num * 100 | 0;
  var tail = parts.length ? ' ' + parts.join(' ') : '';
  return {
    'opacity': val,
    '-ms-filter': '"alpha(opacity=' + perc + ')"' + tail
  };
};
