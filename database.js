import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pgClient = new pg.Client(process.env.NODE_ELEPHANT_URL);

const connect = () => {
    pgClient.connect(err => {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
    });
};

const disconnect = () => {
    pgClient.end();
};

const getAllDataSingleTable = (fields, table) => {
    pgClient.query(`SELECT ${fields} FROM ${table}`, (err, result) => {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows);
        disconnect();
    });
};

const getAllDataAllJoined = () => {
    pgClient.query(
        `
        SELECT t.title techtitle, c.title categorytitle FROM category_tech ct
        INNER JOIN categories c ON c.id = ct.category_id
        INNER JOIN techs t ON t.id = ct.tech_id;
        `
        , (err, result) => {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows);
        disconnect();
    });
};

connect();
// getAllDataSingleTable('title, creator_id', 'categories');
getAllDataAllJoined();