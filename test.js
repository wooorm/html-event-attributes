import assert from 'node:assert/strict'
import test from 'node:test'
import {htmlEventAttributes} from './index.js'

test('htmlEventAttributes', function () {
  assert.ok(Array.isArray(htmlEventAttributes), 'should be an array')

  let index = -1
  while (++index < htmlEventAttributes.length) {
    const prop = htmlEventAttributes[index]
    assert.equal(typeof prop, 'string', prop + ' should be string')
    assert.strictEqual(prop, prop.trim(), prop + ' should be trimmed')
    assert.ok(/^on[a-z]+$/.test(prop), prop + ' should be `a-z`')
  }
})
