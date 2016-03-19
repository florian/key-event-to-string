# JavaScript keyboard events to strings

This library helps converting the event object of a JavaScript keydown event
into a humanly readable format.
The idea is to use this for UI components that let the user choose keyboard
shortcuts.

## Installation

```
$ npm install --save key-event-to-string
```

## Usage

```js
var event2string = require('key-event-to-string')(options)

document.body.onkeydown = (e) => {
	let keys = event2string(e)
	console.log(keys) // e.g. "Ctrl + A"
}
```

### Options

`options` can be an object with the following properties:

| key | value | default value |
|:--|:--|:--|
| `cmd` |  What string to display for the Cmd/Meta modifier | `"Command"` |
| `ctrl` |  What string to display for the Ctrl modifier | `"Ctrl"` |
| `alt` |  What string to display for the Alt/Option modifier | `"Alt"` |
| `shift` |  What string to display for the Shift modifier | `"Shift"` |
| `joinWith` | The string that's displayed between all keys | `" + "`

For example this could be used to get the Mac style keyboard shortcut strings:

```js
{
	cmd: "⌘",
	ctrl: "⌃",
	alt: "⌥",
	shift: "⇧",
	joinWith: ""
}
```

## Disclaimer

- This library is meant to parse only `keydown` events. `keypress` / `keyup` events have small differences, e..g. `keydown` is needed to capture `Command` on a Mac. So `keydown` is advisible for this anyways.
- I wrote this library for an Electron side project, so I only needed it to run in the Chrome runtime. It probably won't work well in old browsers
