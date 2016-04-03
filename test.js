'use strict'

/* global it */

const assert = require('assert')
const parse = require('./parse')

it('should parse correctly', () => {
  assert.deepEqual(
    parse('-x 3 -y 4 -n5 -abc --beep=boop foo bar baz'.split(' ')),
    {
      _: [ 'foo', 'bar', 'baz' ],
      _flags: {
        n: true,
        5: true,
        a: true,
        b: true,
        c: true
      },
      x: '3',
      y: '4',
      beep: 'boop'
    }
  )
})
