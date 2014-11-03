
# stream-volume

  Measure the total volume of data a stream emits.

  [![build status](https://secure.travis-ci.org/micnews/stream-volume.svg)](http://travis-ci.org/micnews/stream-volume)

## Example

```js
var Volume = require('stream-volume');

src
.pipe(Volume(function(vol){
  console.log('Volume in bytes: %s', vol);
}))
.pipe(dest);
```

## Installation

```bash
$ npm install stream-volume
```

## API

### Volume(cb)

  Create a Transform stream that passes through all data and calls `cb` with the total volume in bytes.

## License

  MIT
