const express = require('express');
const serveStatic = require('serve-static');

const router = require('./router.js');

const server = express();
const port = process.env.PORT || 3000;


server.use(router);
server.use(serveStatic('build', { index: false }));

server.listen(port, () => console.log(`Listening on port ${port}`));