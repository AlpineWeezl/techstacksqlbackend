import { pool } from "../db/pg";

export const getAllTechs = (req, res) => {
    pool
        .query('SELECT * FROM techs')
        .then(data => {
            res.status(200).json(
                {
                    techs: data.rows
                }
            )
        })
        .catch(err => {
            res.status(500).send(`No techs found! \n ${err}`)
        });
};

export const getTechById = (req, res) => {
    const { id } = req.params;
    pool
        .query('SELECT * FROM users WHERE id = $1', [id])
        .then(res.status(200).json(
            {
                user: res.data
            }
        ))
        .catch(err => {
            res.status(500).send(`No tech found! \n`, [id])
        })
};