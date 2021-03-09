import express from 'express';
import TestController from '@server/api/controllers/TestController';

const { Router } = express;

const TestRouter = Router();

TestRouter.get('/hello', (req, res) => {
    TestController.hello(req, res);
});

export default TestRouter;
