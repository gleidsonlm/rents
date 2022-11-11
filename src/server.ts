require('dotenv').config();
import express from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json"

import { router } from './routes'

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://127.0.0.1/${process.env.PORT}`);
});