if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

console.log('# WebAssembly', global.WebAssembly)

require('sodium-test')(require('.'))

if ((typeof window !== 'undefined') && window.close) window.close()
