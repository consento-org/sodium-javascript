if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

require('sodium-test')(require('.'))

if ((typeof window !== 'undefined') && window.close) window.close()
