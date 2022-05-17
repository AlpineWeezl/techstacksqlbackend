import pkg from 'pg'
const { Pool } = pkg;

const connString = process.env.NODE_ELEPHANT_URL;

export const pool = new Pool({
    connString
});