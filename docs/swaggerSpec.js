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
        url: 'https://arduino-server-o6py.onrender.com',
        description: 'Render 배포 서버',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
