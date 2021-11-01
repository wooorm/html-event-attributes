import assert from 'node:assert'
import test from 'tape'
import {htmlEventAttributes} from './index.js'

test('htmlEventAttributes', function (t) {
  t.ok(Array.isArray(htmlEventAttributes), 'should be an array')

  t.doesNotThrow(function () {
    let index = -1
    let prop
    while (++index < htmlEventAttributes.length) {
      prop = htmlEventAttributes[index]
      assert.equal(typeof prop, 'string', prop + ' should be string')
      assert.strictEqual(prop, prop.trim(), prop + ' should be trimmed')
      assert.ok(/^on[a-z]+$/.test(prop), prop + ' should be `a-z`')
    }
  }, 'name should be lowercase, trimmed, alphabetical strings')

  t.end()
})
