# minimisty

[![build](https://travis-ci.org/tallesl/minimisty.png)](https://travis-ci.org/tallesl/minimisty)
[![coverage](https://coveralls.io/repos/tallesl/minimisty/badge.png?branch=master)](https://coveralls.io/r/tallesl/minimisty?branch=master)
[![dependencies](https://david-dm.org/tallesl/minimisty.png)](https://david-dm.org/tallesl/minimisty)
[![devDependencies](https://david-dm.org/tallesl/minimisty/dev-status.png)](https://david-dm.org/tallesl/minimisty#info=devDependencies)
[![npm module](https://badge.fury.io/js/minimisty.png)](http://badge.fury.io/js/minimisty)

[![npm](https://nodei.co/npm/minimisty.png?mini=true)](https://nodei.co/npm/minimisty/)

*minimistish* argument parsing.

## Usage

```javascript
var argv = require('minimisty')
console.dir(argv)
```

```javascript
$ node example/parse.js -a beep -b boop
{ _: [], _flags: {}, a: 'beep', b: 'boop' }
```

```javascript
$ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  _flags: { '5': true, n: true, a: true, b: true, c: true },
  x: '3',
  y: '4',
  beep: 'boop' }
```

## Rationale

I have used [minimist](https://github.com/substack/minimist) as my argument-parsing library, but two minor things always bothered me:

**Checking for flags is *not that good*.**
`-a` becomes `{ a: true }`.
The correct way to check if the `a` flag was provided is `if (args.a === true)`.
If you simply do `if (args.a)` you could be mistakingly interpreting `-a some-other-thing`.

**process.argv.slice(2) isn't really *classy***.
There is [reasoning for that](https://github.com/substack/minimist/issues/28) but I use it only with node, so I don't care.

And third, well, it's an excuse to exercise some js skills :wink:

