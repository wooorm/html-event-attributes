'use strict'

var assert = require('assert')
var test = require('tape')
var htmlEventAttributes = require('.')

test('htmlEventAttributes', function (t) {
  t.ok(Array.isArray(htmlEventAttributes), 'should be an array')

  t.doesNotThrow(function () {
    var index = -1
    var prop
    while (++index < htmlEventAttributes.length) {
      prop = htmlEventAttributes[index]
      assert.ok(typeof prop, 'string', prop + ' should be string')
      assert.strictEqual(prop, prop.trim(), prop + ' should be trimmed')
      assert.ok(/^on[a-z]+$/.test(prop), prop + ' should be `a-z`')
    }
  }, 'name should be lowercase, trimmed, alphabetical strings')

  t.end()
})
