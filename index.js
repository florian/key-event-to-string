var defaultOptions = {
  cmd: 'Command',
  ctrl: 'Ctrl',
  alt: 'Alt',
  shift: 'Shift',
  joinWith: ' + '
}

var keyMap = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  27: 'Escape',
  32: 'Space',
  36: 'Home',
  33: 'Page Up',
  34: 'Page Down',
  35: 'End',
  37: 'Left',
  38: 'Up',
  39: 'Right',
  40: 'Down',
  46: 'Delete',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  192: '`',
  222: "'"
}

function buildKeyMap (e) {
  var isOnlyModifier = [16, 17, 18, 91, 93, 224].indexOf(e.keyCode) !== -1
  var character = isOnlyModifier ? null : keyMap[e.keyCode] || String.fromCharCode(e.keyCode)

  return {
    character: character,
    modifiers: {
      cmd: e.metaKey,
      ctrl: e.ctrlKey,
      alt: e.altKey,
      shift: e.shiftKey
    }
  }
}

function buildKeyArray (e, options) {
  var map = buildKeyMap(e)
  var modifiers = map.modifiers

  var result = []

  if (modifiers.cmd) result.push(options.cmd)
  if (modifiers.ctrl) result.push(options.ctrl)
  if (modifiers.alt) result.push(options.alt)
  if (modifiers.shift) result.push(options.shift)
  if (map.character) result.push(map.character)

  return result
}

function event2string (e, options) {
  options = Object.assign(defaultOptions, options)
  return buildKeyArray(e, options).join(options.joinWith)
}

module.exports = event2string
