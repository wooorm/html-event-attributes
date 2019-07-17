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

function onhtml4(res) {
  res.pipe(concat(onconcat)).on('error', bail)

  function onconcat(buf) {
    var nodes = q.selectAll('table tr', processor.parse(buf))

    // Throw if we didn’t match, e.g., when the spec updates.
    if (nodes.length === 0) {
      throw new Error('Missing results in html4')
    }

    nodes.forEach(each)

    done()
  }

  function each(node) {
    var name = q.select('[title="Name"]', node)

    if (!name) {
      return
    }

    name = toString(name).trim()

    if (ev(name)) {
      all.push(name)
    }
  }
}

function onhtml(res) {
  res.pipe(concat(onconcat)).on('error', bail)

  function onconcat(buf) {
    var nodes = q.selectAll('#ix-event-handlers tbody tr', processor.parse(buf))

    // Throw if we didn’t match, e.g., when the spec updates.
    if (nodes.length === 0) {
      throw new Error('Missing results in html')
    }

    nodes.forEach(each)

    done()
  }

  function each(node) {
    var name = toString(node.children[0]).trim()

    if (ev(name)) {
      all.push(name)
    }
  }
}

function done() {
  actual++

  if (actual === expected) {
    fs.writeFile(
      'index.json',
      JSON.stringify(all.filter(unique).sort(alphaSort.ascending), 0, 2) + '\n',
      bail
    )
  }
}

function unique(d, i, data) {
  return data.indexOf(d) === i
}
