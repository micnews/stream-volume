var test = require('tape');
var Volume = require('./');
var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

test('simple', function(t){
  emits(['foo', 'bar', 'baz'])
  .pipe(Volume(function(vol){
    t.equal(vol, 9);
  }))
  .pipe(drainAll())
  .on('finish', t.end.bind(t));
});

test('unicode', function(t){
  emits(['foo', 'bar', '\u00bd'])
  .pipe(Volume(function(vol){
    t.equal(vol, 8);
  }))
  .pipe(drainAll())
  .on('finish', t.end.bind(t));
});

function drainAll(){
  var dest = Writable();
  dest._write = function(chunk, enc, cb){
    cb();
  };
  return dest;
}

function emits(arr){
  var src = Readable();
  var i = 0;
  src._read = function(){
    this.push(arr[i++] || null);
  };
  return src;
}
