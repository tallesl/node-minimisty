var args = '-x 3 -y 4 -n5 -abc --beep=boop foo bar baz'.split(' ')
  , benchmark = new (require('benchmark')).Suite
  , minimist = require('minimist')
  , minimisty = require('../lib/minimisty')

benchmark.add('minimist', function () {
  minimist(args)
})
.add('minimisty', function () {
  minimisty(args)
})
.on('cycle', function(event) {
  console.log(String(event.target))
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'))
})
.run({ 'async': true })

