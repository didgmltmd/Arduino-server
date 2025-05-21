const { setIO } = require('../controllers/tagController');

function setupSocket(server) {
  const { Server } = require('socket.io');
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('🟢 클라이언트 접속됨:', socket.id);

    socket.on('disconnect', () => {
      console.log('🔴 클라이언트 연결 해제:', socket.id);
    });
  });

  // controller에 io 전달
  setIO(io);
}

module.exports = setupSocket;
