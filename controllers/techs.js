import { pool } from "../db/pg.js";

export const getAllTechs = (req, res) => {
    pool
        .query('SELECT * FROM techs')
        .then(data => {
            res
                .status(200)
                .json(
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
        .query('SELECT * FROM techs WHERE id = $1', [id])
        .then(data => {
            res.status(200).json(
                {
                    tech: data.rows[0]
                }
            )
        })
        .catch(err => {
            res.status(500).send(`No tech found! \n ${err}`)
        });
};

export const createTech = (req, res) => {

}