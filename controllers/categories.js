import { pool } from "../db/pg.js";


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

export const getCategoryById = (req, res) => {
    const { id } = req.params;
    pool
        .query('SELECT * FROM categories WHERE id = $1', [id])
        .then(data => {
            res.status(200).json(
                {
                    categories: res.data
                }
            )
        })
        .catch(err => {
            res.status(500).send(`No category foung! \n ${err}`)
        })
};