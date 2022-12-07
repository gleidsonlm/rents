require('dotenv').config();

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import "reflect-metadata";
import './database';
import './shared/container';

import { router } from './routes';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";
import { AppError } from './errors/AppError';

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({ message: err.message });
        }

        return response.status(500).json({
            status: 'Internal server error',
            message: `${err.message}`
        })
    }
)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://0.0.0.0:${process.env.PORT}`);
});