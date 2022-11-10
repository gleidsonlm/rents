require('dotenv').config();
import express from 'express';
import { router } from './routes'

const app = express();
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening http://127.0.0.1/${process.env.PORT}`);
});