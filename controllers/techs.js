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
            res.status(404).send(`No techs found! \n ${err}`)
        });
};