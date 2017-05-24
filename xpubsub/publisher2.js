let zmq = require('zmq');
let cbor = require('cbor');
let sock = zmq.socket('pub');

sock.connect('ipc://pubs.ipc');
console.log('Publisher2 connected to pubs.ipc');

setInterval(function () {
    let topic = 'foo';
    let message = {wibble:'wobble'};
    console.log(`Publisher2: Sending ${topic}:${JSON.stringify(message)}`);
    sock.send([topic, cbor.encode(message)]);
}, 500);
