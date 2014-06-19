# rework-mixin-opacity

[![Build Status](https://secure.travis-ci.org/reworkcss/rework-mixin-opacity.png?branch=master)](http://travis-ci.org/reworkcss/rework-mixin-opacity)

A [Rework](https://github.com/reworkcss/rework) mixin that inserts IE 8's
proprietary opacity filter after any native CSS `opacity` declaration.

## Installation

Install with npm:

```
npm install --save-dev rework-mixin-opacity
```

## Use

As a Rework mixin:

```js
var rework = require('rework');
var mixin = require('rework-plugin-mixin');
var opacity = require('rework-mixin-opacity');

var css = rework(source)
  .use(mixin({
    opacity: opacity
  }))
  .toString();
```

Reworking this CSS:

```css
div {
  opacity: 0.5;
}
```

Yields:

```css
div {
  opacity: 0.5;
  -ms-filter: "alpha(opacity=50)"
}
```

## Testing

From the repo root:

```
npm test
```
