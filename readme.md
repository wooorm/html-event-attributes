# html-event-attributes

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of HTML event handler content attributes.

Includes events from [HTML 4][html4] and [HTML][] (the living standard).

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install html-event-attributes
```

## Use

```js
import {htmlEventAttributes} from 'html-event-attributes'

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

This package exports the following identifiers: `htmlEventAttributes`.
There is no default export.

### `htmlEventAttributes`

`string[]` — List of HTML event handler content attributes.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/html-event-attributes/workflows/main/badge.svg

[build]: https://github.com/wooorm/html-event-attributes/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/html-event-attributes.svg

[coverage]: https://codecov.io/github/wooorm/html-event-attributes

[downloads-badge]: https://img.shields.io/npm/dm/html-event-attributes.svg

[downloads]: https://www.npmjs.com/package/html-event-attributes

[size-badge]: https://img.shields.io/bundlephobia/minzip/html-event-attributes.svg

[size]: https://bundlephobia.com/result?p=html-event-attributes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[html4]: https://www.w3.org/TR/html4/index/attributes.html

[html]: https://html.spec.whatwg.org/multipage/indices.html
