let zmq = require('zmq');
let cbor = require('cbor');
let sock = zmq.socket('sub');

sock.connect('ipc://subs.ipc');
sock.subscribe('foo');
console.log('Subscriber1 connected to subs.ipc');

sock.on('message', function(topic, message) {
    console.log(`Subscriber1: Received ${topic.toString()} : ${JSON.stringify(cbor.decode(message))}`);
});