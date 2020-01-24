# html-event-attributes

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of HTML event handler content attributes.

Includes events from [HTML 4][html4] and [HTML][] (the living standard).

## Install

[npm][]:

```sh
npm install html-event-attributes
```

## Use

```js
var htmlEventAttributes = require('html-event-attributes')

console.log(htmlEventAttributes.slice(0, 10))
```

Yields:

```js
[
  'onabort',
  'onafterprint',
  'onauxclick',
  'onbeforeprint',
  'onbeforeunload',
  'onblur',
  'oncancel',
  'oncanplay',
  'oncanplaythrough',
  'onchange'
]
```

## API

### `htmlEventAttributes`

`Array.<string>` — List of HTML event handler content attributes.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-event-attributes.svg

[build]: https://travis-ci.org/wooorm/html-event-attributes

[downloads-badge]: https://img.shields.io/npm/dm/html-event-attributes.svg

[downloads]: https://www.npmjs.com/package/html-event-attributes

[size-badge]: https://img.shields.io/bundlephobia/minzip/html-event-attributes.svg

[size]: https://bundlephobia.com/result?p=html-event-attributes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[html4]: https://www.w3.org/TR/html4/index/attributes.html

[html]: https://html.spec.whatwg.org/multipage/indices.html
