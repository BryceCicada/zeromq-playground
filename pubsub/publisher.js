let zmq = require('zmq');
let cbor = require('cbor');
let sock = zmq.socket('pub');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound to port 3000');

setInterval(function () {
    let topic = 'foo';
    let message = {bar:'baz'};
    console.log(`Publisher: Sending ${topic}:${JSON.stringify(message)}`);
    sock.send([topic, cbor.encode(message)]);

}, 500);
