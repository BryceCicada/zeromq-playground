let zmq = require('zmq');
let cbor = require('cbor');
let sock = zmq.socket('pub');

sock.connect('ipc://pubs.ipc');
console.log('Publisher1 connected to pubs.ipc');

setInterval(function () {
    let topic = 'foo';
    let message = {bar:'baz'};
    console.log(`Publisher1: Sending ${topic}:${JSON.stringify(message)}`);
    sock.send([topic, cbor.encode(message)]);
}, 500);
