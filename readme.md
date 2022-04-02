# html-event-attributes

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of HTML event handler attributes.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`htmlEventAttributes`](#htmleventattributes)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a list of all HTML event handlers (`onclick`, etc).
It includes events from [HTML 4][html4] and [HTML][] (the living standard).

## When should I use this?

You can use this package if you want to figure out whether an HTML attribute is
a known event handler.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install html-event-attributes
```

In Deno with [`esm.sh`][esmsh]:

```js
import {htmlEventAttributes} from 'https://esm.sh/html-event-attributes@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {htmlEventAttributes} from 'https://esm.sh/html-event-attributes@2?bundle'
</script>
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

List of HTML event handler attributes (`Array<string>`).

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/svg-event-attributes`](https://github.com/wooorm/svg-event-attributes)
    — list of SVG event attributes
*   [`wooorm/html-element-attributes`](https://github.com/wooorm/html-element-attributes)
    — map of HTML elements to attributes
*   [`wooorm/svg-element-attributes`](https://github.com/wooorm/svg-element-attributes)
    — map of SVG elements to attributes
*   [`wooorm/aria-attributes`](https://github.com/wooorm/aria-attributes)
    — list of ARIA attributes

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[html4]: https://www.w3.org/TR/html4/index/attributes.html

[html]: https://html.spec.whatwg.org/multipage/indices.html
