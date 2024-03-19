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

// PUT

// DELETE

module.exports = router;
