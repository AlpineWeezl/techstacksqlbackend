import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { categoriesRouter } from './routes/categories.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use('/api/techs', techsRouter)
app.use('/api/categories', categoriesRouter)

app.listen(port, () => console.log(`The server is listening on port ${port}`));