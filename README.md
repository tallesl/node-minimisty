# minimisty

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][version-img]][version]

Minimistish argument parsing.

I have used [minimist] as my argument-parsing library, but two minor things always bothered me:

* Checking for flags is not that good.
`-a` becomes `{ a: true }`.
The correct way to check if the `a` flag was provided is `if (args.a === true)`.
If you simply do `if (args.a)` you could be mistakingly interpreting `-a some-other-thing`.

* process.argv.slice(2) isn't really classy.
There is [a reason for that], but I use it only with node so I don't care.

[build]:               https://travis-ci.org/tallesl/node-minimisty
[build-img]:           https://travis-ci.org/tallesl/node-minimisty.svg
[coverage]:            https://coveralls.io/r/tallesl/node-minimisty?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-minimisty/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-minimisty
[dependencies-img]:    https://david-dm.org/tallesl/node-minimisty.svg
[devdependencies]:     https://david-dm.org/tallesl/node-minimisty#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/node-minimisty/dev-status.svg
[version]:             https://www.npmjs.com/package/minimisty
[version-img]:         https://badge.fury.io/js/minimisty.svg
[minimist]:            https://github.com/substack/minimist
[a reason for that]:   https://github.com/substack/minimist/issues/28

## Usage

```js
// example.js
const argv = require('minimisty')
console.dir(argv)
```

```js
$ node example.js -a beep -b boop
{ _: [], _flags: {}, a: 'beep', b: 'boop' }
```

```js
$ node example.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  _flags: { '5': true, n: true, a: true, b: true, c: true },
  x: '3',
  y: '4',
  beep: 'boop' }
```
