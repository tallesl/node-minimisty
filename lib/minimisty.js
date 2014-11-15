module.exports = function (args) {

  var opts = { _: [ ] , _flags: { } }
    , setFlag = function (_flag) { opts._flags[_flag] = true }

  for (var i = 0; i < args.length; ++i) {
    var cur = args[i]
      , n = args[i + 1]
      , parsed

         if (parsed = isDashEqualArgument(cur))  opts[parsed[0]] = parsed[1]
    else if (parsed = isDashArgument(cur, n)) {  opts[parsed[0]] = parsed[1] ; ++i }
    else if (parsed = isFlag(cur))               parsed.forEach(setFlag)
    else if (parsed = isNonDashArgument(cur))    opts._.push(parsed)
  }

  return opts
}

function isDashEqualArgument (current) {
  var flag
  if (! (flag = isFlag(current)) ) return

  var tuple = flag.join('').split('=')
  if (tuple[1]) return tuple
}

function isDashArgument (current, next) {
  var flag
  if (! (flag = isFlag(current)) ) return
  if (!isFlag(next)) return [ flag , next ]
}

function isFlag (current) {
  if (current[0] !== '-') return

  var i = 0
  while (i < current.length) if (current[++i] !== '-') break
  if (i === current.length) return
  var flag = current.substr(i)
  
  if (flag) return flag.split('')
}

function isNonDashArgument (current) {
  if (!isFlag(current)) return current
}

