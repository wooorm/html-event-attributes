import fs from 'fs'
import https from 'https'
import concat from 'concat-stream'
import bail from 'bail'
import alphaSort from 'alpha-sort'
import unified from 'unified'
import html from 'rehype-parse'
import q from 'hast-util-select'
import toString from 'hast-util-to-string'
import ev from 'hast-util-is-event-handler'
import {htmlEventAttributes} from './index.js'

var processor = unified().use(html)

var actual = 0
var expected = 2

https.get('https://www.w3.org/TR/html4/index/attributes.html', onhtml4)
https.get('https://html.spec.whatwg.org/multipage/indices.html', onhtml)

function onhtml4(response) {
  response.pipe(concat(onconcat)).on('error', bail)

  function onconcat(buf) {
    var nodes = q.selectAll('table tr', processor.parse(buf))
    var index = -1
    var name

    while (++index < nodes.length) {
      name = q.select('[title="Name"]', nodes[index])

      if (name) {
        name = toString(name).trim()

        if (ev(name)) htmlEventAttributes.push(name)
      }
    }

    // Throw if we didn’t match, e.g., when the spec updates.
    if (!index) {
      throw new Error('Missing results in html4')
    }

    done()
  }
}

function onhtml(response) {
  response.pipe(concat(onconcat)).on('error', bail)

  function onconcat(buf) {
    var nodes = q.selectAll('#ix-event-handlers tbody tr', processor.parse(buf))
    var index = -1
    var name

    while (++index < nodes.length) {
      name = toString(nodes[index].children[0]).trim()
      if (ev(name)) htmlEventAttributes.push(name)
    }

    // Throw if we didn’t match, e.g., when the spec updates.
    if (!index) {
      throw new Error('Missing results in html')
    }

    done()
  }
}

function done() {
  if (++actual === expected) {
    fs.writeFile(
      'index.js',
      'export var htmlEventAttributes = ' +
        JSON.stringify(
          htmlEventAttributes
            .filter((d, i, data) => data.indexOf(d) === i)
            .sort(alphaSort()),
          null,
          2
        ) +
        '\n',
      bail
    )
  }
}
