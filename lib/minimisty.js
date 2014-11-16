module.exports = function (args) {

  var opts = { _: [ ] , _flags: { } }
    , setFlag = function (_flag) { opts._flags[_flag] = true }

  for (var i = 0; i < args.length; ++i) {
    var cur = args[i]
      , n = args[i + 1]
      , parsed

         if (parsed = isDashEqualArgument(cur))  opts[parsed[0]] = parsed[1]
    else if (parsed = isDashArgument(cur, n)) {  opts[parsed[0]] = parsed[1] ; ++i }
    else if (parsed = isSingleDashFlag(cur))     parsed.forEach(setFlag)
    else if (parsed = isDoubleDashFlag(cur))     opts._flags[parsed] = true
    else opts._.push(cur)
  }

  return opts
}

function firstNonDash (arg) {
  if (arg[0] === '-') for (var i = 0; i < arg.length; ) if (arg[++i] !== '-') return i
}

function isDashEqualArgument (arg) {
  var first = firstNonDash(arg)
  if (first) {
    var tuple = arg.substr(first).split('=')
    if (tuple[1]) return tuple
  }
}

function isDashArgument (arg, next) {
  var first = firstNonDash(arg)
  if (first && next && first !== arg.length && !firstNonDash(next)) return [ arg.substr(first), next ]
}

function isSingleDashFlag (arg) {
  if (firstNonDash(arg) === 1) return arg.substr(1).split('')
}

function isDoubleDashFlag (arg) {
  var first = firstNonDash(arg)
  if (first && first !== arg.length) return arg.substr(first)
}

