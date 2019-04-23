var express = require("express");
var router = express.Router();
const SqlRunner = require("../db/sql_runner");

// CREATE a new film
router.post("/", function(req, res) {
  SqlRunner.run(
    "INSERT INTO films (title, year, show_time) VALUES ($1, $2, $3)",
    [req.body.title, req.body.year, req.body.show_time]
  ).then(result => {
    res.status(201).json(result);
  });
});

// READ darkside characters
// router.get("/dark", function(req, res) {
//   SqlRunner.run("SELECT * FROM characters WHERE darkside = TRUE").then(
//     result => {
//       res.status(200).json(result.rows);
//     }
//   );
// });

// READ all characters
router.get("/", function(req, res) {
  SqlRunner.run("SELECT * FROM films").then(result => {
    res.status(200).json(result.rows);
  });
});

// // DELETE
router.delete("/:id", function(req, res) {
  SqlRunner.run("DELETE FROM films WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(202).json(result);
    }
  );
});

module.exports = router;
