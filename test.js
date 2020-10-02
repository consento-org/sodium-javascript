if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

if(typeof WebAssembly !== 'undefined' && WebAssembly) {
  console.log('# WebAssembly', WebAssembly.Instance, WebAssembly.instantiate)
}

require('sodium-test')(require('.'))

if ((typeof window !== 'undefined') && window.close) window.close()
