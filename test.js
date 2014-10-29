var test = require('tape');
var Volume = require('./');
var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

test('simple', function(t){
  t.plan(1);

  var src = Readable();
  var i = 0;
  src._read = function(){
    this.push({
      0: 'foo',
      1: 'bar',
      2: 'baz',
      3: null
    }[i++]);
  };

  var dest = Writable();
  dest._write = function(chunk, enc, cb){
    cb();
  };

  src
  .pipe(Volume(function(vol){
    t.equal(vol, 9);
  }))
  .pipe(dest);
});
