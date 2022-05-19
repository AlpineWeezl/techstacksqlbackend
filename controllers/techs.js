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
        .query(
            'SELECT t.id, t.title, t.logo_link, t.wiki_link, t.creator_id, t.description, c.id cat_id, c.title cat_title, u.username FROM techs t ' +
            'INNER JOIN categories c ' +
            'ON t.category_id = c.id ' +
            'LEFT JOIN users u ' +
            'ON t.creator_id = u.id ' +
            'ORDER BY t.id;'
        )
        .then(data => {
            if (data.rowCount == 0) {
                res
                    .status(404).json(
                        {
                            message: 'No techs found'
                        }
                    );
            } else {
                res
                    .status(200)
                    .json(
                        {
                            techs: data.rows
                        }
                    );
            }
        })
        .catch(err => {
            res.status(500).send(`No techs found! \n ${err}`)
        });
};

export const getTechById = (req, res) => {
    const { id } = req.params;
    pool
        .query('SELECT t.id, t.title, t.logo_link, t.wiki_link, t.creator_id, t.description, c.id cat_id, c.title cat_title, u.username FROM techs t ' +
            'INNER JOIN categories c ' +
            'ON t.category_id = c.id ' +
            'LEFT JOIN users u ' +
            'ON t.creator_id = u.id ' +
            'WHERE t.id = $1 ' +
            'ORDER BY t.id;'
            , [id])
        .then(data => {
            if (data.rowCount == 0) {
                res
                    .status(404).json(
                        {
                            message: `No tech with id #${id} found`
                        }
                    );
            } else {
                res.status(200).json(
                    {
                        tech: data.rows[0]
                    }
                );
            }
        })
        .catch(err => {
            res.status(500).send(`No tech found! \n ${err}`);
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
    const { id } = req.params;
    pool
        .query('DELETE FROM techs WHERE id = $1', [id])
        .then(data => {
            res.status(200).json(
                {
                    message: `Tech with id #${id} successfully deleted`
                }
            );
        })
        .catch(err => res.status(500).json(
            {
                message: `Could not delete Tech with id #${id}!`
            }
        ))
}


//ADVANCED-READ ---------------------------------------------------

export const getTechsByCategoryId = (req, res) => {
    const { cat_id } = req.params;
    pool
      .query("SELECT * FROM techs WHERE category_id = $1;", [cat_id])
      .then((data) => {
        if (data.rowCount == 0) {
          res.status(404).json(
            {
              message: 'No related techs found!'
            }
          );
        } else {
          res.status(200).json(
            {
              techs: data.rows,
            }
          );
        }
        })
      .catch((err) => {
        res.status(500).send(`No related techs for ${cat_id} found! \n ${err}`);
      });
  };