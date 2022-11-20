import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import alphaSort from 'alpha-sort'
import {fromHtml} from 'hast-util-from-html'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {isEventHandler} from 'hast-util-is-event-handler'
import {htmlEventAttributes} from './index.js'

const response4 = await fetch(
  'https://www.w3.org/TR/html4/index/attributes.html'
)
const text4 = await response4.text()

const nodes4 = selectAll('table tr', fromHtml(text4))
let index = -1

while (++index < nodes4.length) {
  const node = select('[title="Name"]', nodes4[index])

  if (node) {
    const name = toString(node).trim()

    if (isEventHandler(name)) htmlEventAttributes.push(name)
  }
}

// Throw if we didn’t match, e.g., when the spec updates.
if (!index) {
  throw new Error('Missing results in html4')
}

const response = await fetch(
  'https://html.spec.whatwg.org/multipage/indices.html'
)
const text = await response.text()

const nodes = selectAll('#ix-event-handlers tbody tr', fromHtml(text))
index = -1

while (++index < nodes.length) {
  const name = toString(nodes[index].children[0]).trim()
  if (isEventHandler(name)) htmlEventAttributes.push(name)
}

// Throw if we didn’t match, e.g., when the spec updates.
if (!index) {
  throw new Error('Missing results in html')
}

await fs.writeFile(
  'index.js',
  [
    '/**',
    ' * List of HTML event handler attributes.',
    ' *',
    ' * @type {Array<string>}',
    ' */',
    'export const htmlEventAttributes = ' +
      JSON.stringify(
        htmlEventAttributes
          .filter((d, i, data) => data.indexOf(d) === i)
          .sort(alphaSort()),
        null,
        2
      ),
    ''
  ].join('\n')
)
