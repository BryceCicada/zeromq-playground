let zmq = require('zmq');
let subs = zmq.socket('xpub');
let pubs = zmq.socket('xsub');

subs.bindSync('ipc://subs.ipc');
pubs.bindSync('ipc://pubs.ipc');

console.log('Publisher bound to subs.ipc and subs.ipc');

// Don't use zmq proxy, since it fails to handle multipart.
subs.on('message', (...args) => pubs.send(args));
pubs.on('message', (...args) => subs.send(args));
