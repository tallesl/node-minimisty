#! /usr/bin/env node

'use strict'

const args = '-x 3 -y 4 -n5 -abc --beep=boop foo bar baz'.split(' ')
const benchmark = new (require('benchmark')).Suite
const minimist = require('minimist')
const minimisty = require('./parse')

benchmark.add('minimist', () => {
  minimist(args)
}).add('minimisty', () => {
  minimisty(args)
}).on('cycle', (e) => {
  console.log(String(e.target))
}).on('complete', () => {
  console.log(benchmark.filter('fastest').map('name') + ' is the fastest')
}) .run(
  { 'async': true }
)
