const express = require('express');
const cors = require('cors');
const tagRoutes = require('./routes/tagRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swaggerSpec');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Swagger UI 경로
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ 태그 라우트
app.use('/api', tagRoutes);

module.exports = app;
