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
