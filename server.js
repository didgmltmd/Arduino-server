const http = require('http');
const app = require('./app');
const setupSocket = require('./socket');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
setupSocket(server); // socket.io 설정

server.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
