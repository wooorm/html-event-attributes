'use strict'

var fs = require('fs')
var https = require('https')
var concat = require('concat-stream')
var bail = require('bail')
var alphaSort = require('alpha-sort')
var unified = require('unified')
var html = require('rehype-parse')
var q = require('hast-util-select')
var toString = require('hast-util-to-string')
var ev = require('hast-util-is-event-handler')
var all = require('.')

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

        if (ev(name)) all.push(name)
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
      if (ev(name)) all.push(name)
    }

    // Throw if we didn’t match, e.g., when the spec updates.
    if (!index) {
      throw new Error('Missing results in html')
    }

    done()
  }
}

function done() {
  actual++

  if (actual === expected) {
    fs.writeFile(
      'index.json',
      JSON.stringify(
        all.filter((d, i, data) => data.indexOf(d) === i).sort(alphaSort()),
        null,
        2
      ) + '\n',
      bail
    )
  }
}
