'use strict'

/* global it */

const assert = require('assert')
const args = '-x 3 -y 4 -n5 -abc --beep=boop foo bar baz'
const minimisty = require('./')

it(args, () => {
  // arrange
  const expected = {
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

  // act
  const actual = minimisty.parse(args.split(' '))

  // assert
  assert.deepEqual(actual, expected)
})
