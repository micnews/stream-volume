var Transform = require('stream').Transform;
var inherits = require('util').inherits;

module.exports = Volume;
inherits(Volume, Transform);

function Volume(fn){
  if (!(this instanceof Volume)) return new Volume(fn);
  Transform.call(this);
  this._volume = 0;
  this._fn = fn;
}

Volume.prototype._transform = function(chunk, enc, cb){
  this._volume += chunk.length;
  this.push(chunk);
  cb();
};

Volume.prototype._flush = function(cb){
  this._fn(this._volume);
  cb();
};

