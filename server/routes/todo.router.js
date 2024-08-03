const express = require('express');
const router = express.Router();
// pg boilet plate is moved into modefule
const pool = require('../modules/pool.js');

// GET

router.get('/', function(req, res) {

  //  console.log('request for /todo works?');
  // router.get will call out to the database for cafe


  let queryText = 'SELECT * FROM "cafe";'; // this query gets the cafe DB

// sending the query to the DB
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('error in queryText', error);
    res.sendStatus(500);
  })
});
// POST

// PUT

// DELETE

module.exports = router;
