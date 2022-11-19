require('dotenv').config();

import express from 'express';
import "reflect-metadata"

import './database'

import './shared/container'

import { router } from './routes'

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json"

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://0.0.0.0:${process.env.PORT}`);
});