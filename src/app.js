import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import logger from '#config/logger.js';
import authRoute from '#routes/auth.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  morgan('combined', {
    stream: { write: message => logger.info(message.trim()) },
  })
);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    message: 'Hello from Aqusitions ! ',
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'aquisitions-API',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
  });
});

app.use('/api', authRoute);

export default app;
