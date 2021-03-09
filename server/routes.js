import express from 'express';
import TestRouter from './api/routes/TestRouter';

const app = express();

app.use('/api', TestRouter);

export default app;
