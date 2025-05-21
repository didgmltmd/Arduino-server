const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '스마트카트 API 문서',
      version: '1.0.0',
      description: 'RFID UID를 받아 상품 정보를 전달하는 REST API',
    },
    servers: [
      {
        url: 'http://localhost:3000', // ✅ 로컬 개발용
        description: '로컬 개발 서버',
      },
      {
        url: 'https://arduino-server-o6py.onrender.com', // ✅ Render 배포용 (실제 도메인으로 바꿔도 됨)
        description: '배포 서버',
      },
    ],
  },
  apis: ['./routes/*.js'], // ✅ Swagger 주석 위치
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
