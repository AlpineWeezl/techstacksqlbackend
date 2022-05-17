import { pool } from "./db/pg.js";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/api/techs', )

dotenv.config();

const requestListener = (req, res) => {
    res.writeHead(200);
    // res.end('Hello, World!');
    // console.log(req);
}

const server = createServer();
app.listen(8085, () => console.log(`The server is listening on port ${port}`));