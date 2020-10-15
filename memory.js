/* eslint-disable camelcase */
var MessageChannel = global.MessageChannel
if (MessageChannel == null) {
  try {
    MessageChannel = require('worker' + '_threads').MessageChannel
  } catch (e) {
    // Unable to require worker threads
  }
}

function sodium_malloc (n) {
  return new Uint8Array(n)
}

const sink = MessageChannel ? new MessageChannel() : null
function sodium_free (n) {
  if (!sink) return
  sodium_memzero(n)
  sink.port1.postMessage(n.buffer, [n.buffer])
}

function sodium_memzero (arr) {
  arr.fill(0)
}

module.exports = {
  sodium_malloc,
  sodium_free,
  sodium_memzero
}
