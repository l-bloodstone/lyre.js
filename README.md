# lyre.js
## A CLI logging library for node.js cli apps.

![screenshot](./assets/screenshot.png)

## Features:
* Customizable Message.
* Log debug message with function trace.
* `Custom` logger class.
* support RGB colors

## Installation
```bash
npm install lyre.js
```


## Example:
Code example of the above screenshot.
```js
import * as lyre from "lyre.js" // ES modules
// const lyre = require("lyre.js") // commonjs

lyre.error("This is an error!")
lyre.info("This is an info.")
lyre.warn("This is a warning!")

// 2nd argument is to suppress function trace
lyre.debug("This is debug log.", false) 

new lyre.Custom("IMPL", ["bold", "magenta"])
    .log("Implementation of a function")
```


### Customizable message:

```js
lyre.error("This message has underline and bold text, ['underline', 'bold'])
```

**Each method accepts a second argument as an `array` of keywords to customize the message**

#### Customizable `keywords`.
This keyword base on linux [`console-codes`](https://man7.org/linux/man-pages/man4/console_codes.4.html). Available keywords are-

`[ 'bold', 'dim', 'italic', 'underline', 'invert', 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white' ]`

**To set Background color-**

`[ 'blackBg', 'redBg', 'greenBg', 'yellowBg', 'blueBg', 'magentaBg', 'cyanBg', 'whiteBg' ]`

**Terminals may have their own color scheme. The color names are relative to the terminal colors.**

**For terminals that support 24bit color, it can use RGB to format the text**

```js
lyre.error("This error is Crimson Red.", ['bold'], 0xb22222)
// note that the value is an integer in hexadecimal format.

// methods also eccept the argument as an object
lyre.error("This error is Crimson Red.", ['bold'], {r: 178, g: 34, b: 34})
```

## API
parameter names:

`msg <string>` default `''`

`trace <bool>` default `true`

`opts <array of keywords>` default `[]`

`rgb [<integer> | <object>]` default `null`
___

### `err(msg, opts, rgb)`
### `error(msg, opts, rgb)` same as `err`
### `warn(msg, opts, rgb)`
### `info(msg, opts, rgb)`
### `debug(msg, trace, opts, rgb)`

## `Custom` class
parameter names:

`name <string>` default `''`
___
### `new Custom(name, opts, rgb)`
```js
const impl = new lyre.Custom("IMPL", ['bold', 'green'])
impl.log("custom log class", ['underline'])
```

### `Custom.log(msg, opts, rgb)`
