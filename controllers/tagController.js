const productMap = require('../data/productMap');

let io = null;
function setIO(socketInstance) {
  io = socketInstance;
}

function handleTag(req, res) {
  const { uid } = req.body;
  console.log('📥 UID 수신:', uid);

  const item = productMap[uid];
  if (!item) {
    return res.status(404).json({ error: 'Unknown UID' });
  }

  // 실시간으로 클라이언트에게 전송
  if (io) {
    io.emit('new-item', item);
    console.log('📤 클라이언트로 전송됨:', item);
  }

  res.json({ success: true, item });
}

module.exports = { handleTag, setIO };
