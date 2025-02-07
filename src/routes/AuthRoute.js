import express from 'express';
import { login } from "../controllers/AuthController.js"

const app = express();

app.post('/', login);

export default app;