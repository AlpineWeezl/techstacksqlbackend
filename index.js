import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use('/api/techs', techsRouter)
// app.use('/api/categories', categoriesRouter)

dotenv.config();

app.listen(port, () => console.log(`The server is listening on port ${port}`));