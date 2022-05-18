import { pool } from "../db/pg.js";

// ###################################################################################
// Basic CRUD Operations
// ###################################################################################

// Create ----------------------------------------------------------------------------
export const createTech = (req, res) => {
    const { title, description, logo_link, wiki_link, creator_id } = req.body;

    pool
        .query('INSERT INTO techs (title, description, logo_link, wiki_link, creator_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [title, description, logo_link, wiki_link, creator_id])
        .then(data => res.status(201).json({ tech: data.rows[0] }))
        .catch(err => res.status(500).json({ error: err }));
}

// Read ------------------------------------------------------------------------------
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
// Update ----------------------------------------------------------------------------
export const updateTechById = (req, res) => {
    const { id } = req.params;
    const { title, description, logo_link, wiki_link } = req.body;
    pool
        .query('UPDATE techs SET title = $1, description = $2, logo_link = $3, wiki_link = $4 WHERE id = $5 RETURNING *;', [title, description, logo_link, wiki_link, id])
        .then(data => {
            res.status(200).json(
                {
                    tech: data.rows[0]
                }
            )
        })
        .catch(err => {
            res.status(500).send(`Tech ${id} could not be updated! \n ${err}`)
        });
}
// Delete ----------------------------------------------------------------------------
export const deleteTechById = (req, res) => {

}