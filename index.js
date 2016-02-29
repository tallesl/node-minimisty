'use strict'

function parse (args) {
  const opts = { _: [ ], _flags: { } }
  const setFlag = (_flag) => { opts._flags[_flag] = true }

  for (let i = 0; i < args.length; ++i) {
    const cur = args[i]
    const n = args[i + 1]

    let parsed = dashEqualArgument(cur)
    if (parsed) {
      opts[parsed[0]] = parsed[1]
      continue
    }

    parsed = dashArgument(cur, n)
    if (parsed) {
      opts[parsed[0]] = parsed[1]
      ++i
      continue
    }

    parsed = singleDashFlag(cur)
    if (parsed) {
      parsed.forEach(setFlag)
      continue
    }

    parsed = doubleDashFlag(cur)
    if (parsed) {
      opts._flags[parsed] = true
      continue
    }

    opts._.push(cur)
  }

  return opts
}

function firstNonDash (arg) {
  if (arg[0] === '-') {
    for (let i = 0; i < arg.length;) {
      if (arg[++i] !== '-') {
        return i
      }
    }
  }
}

function dashEqualArgument (arg) {
  const first = firstNonDash(arg)
  if (first) {
    const tuple = arg.substr(first).split('=')
    if (tuple[1]) {
      return tuple
    }
  }
}

function dashArgument (arg, next) {
  const first = firstNonDash(arg)
  if (first && next && first !== arg.length && !firstNonDash(next)) {
    return [ arg.substr(first), next ]
  }
}

function singleDashFlag (arg) {
  if (firstNonDash(arg) === 1) {
    return arg.substr(1).split('')
  }
}

function doubleDashFlag (arg) {
  const first = firstNonDash(arg)
  if (first && first !== arg.length) {
    return arg.substr(first)
  }
}

module.exports = () => {
  return parse(process.argv.slice(2))
}

module.exports.parse = parse
