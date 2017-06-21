# cast-function

> Casts value as a function if it's not one.


## Install

```
$ npm install cast-function
```


## Usage

```js
const castFunction = require('cast-function');

const unicorn = '🦄';
const rainbow = () => '🌈';

console.log(castFunction(unicorn)()); // 🦄
console.log(castFunction(rainbow)()); // 🌈
```


## API

### castFunction(value)

Casts value as a function that returns value if it's not one.


## License

MIT © [Cristian Pallarés](http://pallares.io)
