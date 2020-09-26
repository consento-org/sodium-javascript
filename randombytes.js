var assert = require('nanoassert')
var getRandomValues = require('get-random-values-polypony')

function randombytes (out, n) {
  getRandomValues(new Uint8Array(out.buffer, out.byteOffset, n))
}

// Make non enumerable as this is an internal function
Object.defineProperty(module.exports, 'randombytes', {
  value: randombytes
})

module.exports.randombytes_buf = function (out) {
  assert(out, 'out must be given')
  randombytes(out, out.byteLength)
}
