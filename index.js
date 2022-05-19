import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { categoriesRouter } from './routes/categories.js';
import { techsRouter } from "./routes/techs.js";

// dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app
    .get('/cors', (req, res) => {
        res.header("Access-Control-Allow-Origin", process.env.CORS);
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        next();
    })
app.use(express.json());
app.use('/api/categories', categoriesRouter)
app.use('/api/techs', techsRouter)

app.listen(port, () => console.log(`The server is listening on port ${port}`));