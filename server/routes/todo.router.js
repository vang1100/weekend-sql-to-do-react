const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('testing get');
    let queryText = `SELECT * FROM lattes;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error query', error);
        res.sendStatus(500);
    });
});
// POST

router.post('/', (req, res) => {
    let newLattes = req.body;
    let queryText = `INSERT INTO "lattes" ("flavor", "milk", "oz")
        VALUES ($1, $2, $3)`;
    pool.query(queryText, [newLattes.flavor, newLattes.milk, newLattes.oz])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in query', error);
            res.sendStatus(500);
        });
});
// PUT

// DELETE

module.exports = router;
