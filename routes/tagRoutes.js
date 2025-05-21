const express = require('express');
const router = express.Router();
const { handleTag } = require('../controllers/tagController');

/**
 * @swagger
 * /api/tag:
 *   post:
 *     summary: RFID UID를 수신하고 상품 정보를 브로드캐스트함
 *     tags: [RFID]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               uid:
 *                 type: string
 *                 example: "04AABBCCDD"
 *     responses:
 *       200:
 *         description: 상품 정보 전송 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 item:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     price:
 *                       type: integer
 *       404:
 *         description: 알 수 없는 UID
 */
router.post('/tag', handleTag);

module.exports = router;
