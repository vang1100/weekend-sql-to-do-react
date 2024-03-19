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

router.put('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
        let queryText = `
        UPDATE "lattes" set "milk" = $1
        WHERE "id" = $2;
        `;
    pool.query(queryText, [req.body.milk, req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in put/api/todo/:id', error);
            res.sendStatus(500);
        });
});

// DELETE

module.exports = router;
