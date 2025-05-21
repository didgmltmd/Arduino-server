const express = require('express');
const cors = require('cors');
const tagRoutes = require('./routes/tagRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swaggerSpec');

const app = express();

// ✅ 명시적으로 CORS 전체 허용
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// ✅ Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ API 라우트
app.use('/api', tagRoutes);

module.exports = app;
