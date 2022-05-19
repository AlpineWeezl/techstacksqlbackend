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
        res.set('Access-Control-Allow-Origin', process.env.CORS);
        res.send({ "msg": "This has CORS enabled 🎈" })
    })
app.use(express.json());
app.use('/api/categories', categoriesRouter)
app.use('/api/techs', techsRouter)

app.listen(port, () => console.log(`The server is listening on port ${port}`));