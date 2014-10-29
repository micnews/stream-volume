
# stream-volume

  Measure the total volume of data a stream emits.

## Example

```js
var Volume = require('stream-volume');

src
.pipe(Volume(function(vol){
  console.log('Volume in bytes: %s', vol);
}))
.pipe(dest);
```

## API

### Volume(cb)

  Create a Transform stream that passes through all data and calls `cb` with the total volume in bytes.

## License

  MIT
