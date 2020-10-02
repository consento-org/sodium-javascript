// Lots of the sodium code assumes a global Buffer
// If it isn't present, we should add it
if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

// iOS defines a WebAssembly global, but doesn't provide a way to create instances
// We shold delete the WebAssembly global in that case so that the tests pass
if (typeof WebAssembly !== 'undefined' && global.WebAssembly) {
  const canMakeInstance = global.WebAssembly.Instance || global.WebAssembly.instantiate
  if (canMakeInstance) {
    global.WebAssembly = undefined
  }
}

require('sodium-test')(require('.'))

if ((typeof window !== 'undefined') && window.close) window.close()
