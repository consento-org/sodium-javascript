if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

if (typeof WebAssembly !== 'undefined' && global.WebAssembly) {
  console.log('# WebAssembly', global.WebAssembly.Instance, global.WebAssembly.instantiate)
}

require('sodium-test')(require('.'))

if ((typeof window !== 'undefined') && window.close) window.close()
