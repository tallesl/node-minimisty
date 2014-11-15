var assert = require('assert')
  , args = '-x 3 -y 4 -n5 -abc --beep=boop foo bar baz'
  , minimisty = require('../lib/minimisty')

require('format-unicorn')


it(args, function () {

  // arrange
  var expected = {
    _: [
      'foo' ,
      'bar' ,
      'baz' ,
    ],

    _flags: {
      n: true ,
      5: true ,
      a: true ,
      b: true ,
      c: true
    },

       x: '3' ,
       y: '4' ,
    beep: 'boop'
  }

  // act
  var actual = minimisty(args.split(' '))

  // assert
  var unicorn = {
      actual: JSON.stringify(actual, null, 2) ,
    expected: JSON.stringify(expected, null, 2)
  }
  assert.deepEqual(actual, expected, '\nactual:\n{actual}\n\nexpected:\n{expected}\n'.formatUnicorn(unicorn))

})

