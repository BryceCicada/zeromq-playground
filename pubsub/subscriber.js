let zmq = require('zmq');
let cbor = require('cbor');
let sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('foo');
console.log('Subscriber connected to port 3000');

sock.on('message', function(topic, message) {
    console.log(`Subscriber: Received ${topic.toString()} : ${JSON.stringify(cbor.decode(message))}`);
});