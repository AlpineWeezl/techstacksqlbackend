import { pool } from "../db/pg";


export const getAllCategories = (req, res) => {
    pool
        .query('SELECT * FROM categories')
        .then(data => {
            res.status(200).json(
                {
                    categories: data.rows
                }
            )
        })
        .catch(err => {
            res.status(500).send(`No categories found! \n ${err}`)
        });
};