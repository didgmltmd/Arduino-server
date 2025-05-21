const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '스마트카트 API 문서',
      version: '1.0.0',
      description: 'RFID UID → 상품정보를 전송받는 API 문서',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: '개발 서버',
      },
    ],
  },
  apis: ['./routes/*.js'], // Swagger 주석 위치
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
