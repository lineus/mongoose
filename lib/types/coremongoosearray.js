'use strict';

class CoreMongooseArray extends Array {
  constructor() {
    super();
    const paths = [
      '_path', 'isMongooseDocumentArray', 'validators', '_atomics', '_schema',
      '_handlers', 'toBSON', '_cast', 'id', 'toObject', 'inspect', 'create',
      'notify', '_markModified', '_registerAtomic', '$__getAtomics', 'hasAtomics',
      '_mapCast', 'nonAtomicPush', '$pop', 'pop', 'shift', '$shift', 'pull',
      'splice', 'unshift', 'sort', 'addToSet', 'set', 'indexOf', 'remove',
      '_parent', 'push'
    ];
    paths.forEach(function(path) {
      let val = (path === 'push') ? [].push : undefined;
      Object.defineProperty(this, path, {
        enumerable: false,
        writable: true,
        value: val
      });
    }, this);

  }
  get isMongooseArray() {
    return true;
  }

}



module.exports = CoreMongooseArray;