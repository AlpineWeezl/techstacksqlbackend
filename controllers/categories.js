import { pool } from "../db/pg.js";


//CREATE -------------------------------------------------

export const createCategory = (req, res) => {
  const { title, description, creator_id } = req.body;
  pool
    .query(
      "INSERT INTO categories (title, description, creator_id) VALUES ($1, $2, $3) RETURNING *;",
      [title, description, creator_id]
    )
    .then((data) => {
      res.status(200).json({
        category: data.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).send(`Can't create category! \n ${err}`);
    });
};

//READ ---------------------------------------------------

export const getAllCategories = (req, res) => {
    pool
      .query("SELECT * FROM categories;")
      .then((data) => {
        if (data.rowCount == 0) {
          res.status(404).json(
            {
              message: 'No categories found!'
            }
          );
        } else {
          res.status(200).json(
            {
              categories: data.rows,
            }
          );
        }
        })
      .catch((err) => {
        res.status(500).send(`No categories found! \n ${err}`);
      });
};
  
export const getCategoryById = (req, res) => {
    const { id } = req.params;
    pool
      .query("SELECT * FROM categories WHERE id = $1;", [id])
      .then((data) => {
        if (data.rowCount == 0) {
          res.status(404).json(
            {
              message: `No category with id #${id} found!`
            }
          );
        } else {
          res.status(200).json(
            {
              category: data.rows[0],
            }
          );
        }
      })
      .catch((err) => {
        res.status(500).send(`No category found! \n ${err}`);
      });
};


//UPDATE -------------------------------------------------

export const updateCategory = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    pool
        .query("UPDATE categories SET title = $1, description = $2 WHERE id = $3 RETURNING *;", [title, description, id])
        .then((data) => {
            res.status(200).json({
                category: data.rows[0],
                message: `Category #${id} was successfully updated!`,
            });
          })
        .catch((err) => {
            res.status(500).send(`Couldn't update category #${id}! \n ${err}`);
          });
};


//DELETE -------------------------------------------------

export const deleteCategoryById = (req, res) => {
  const { id } = req.params;
  pool
    .query("DELETE FROM categories WHERE id = $1;", [id])
    .then((data) => {
      res.status(200).json({
        message: `Category #${id} was successfully deleted!`,
      });
    })
    .catch((err) => {
      res.status(500).send(`Couldn't delete category #${id}! \n ${err}`);
    });
};