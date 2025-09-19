import { signup } from '#controllers/auth.controller.js';
import express from 'express';

const authRoute = express.Router();

authRoute.post('/sign-up', signup);
authRoute.post('/sign-in', signup);
authRoute.post('/sign-out', signup);

export default authRoute;
