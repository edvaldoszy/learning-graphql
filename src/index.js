const { createServer } = require('http');
const app = require('./app');

const server = createServer(app);

server.listen(3000, () => console.log('Server started at http://localhost:3000'));
