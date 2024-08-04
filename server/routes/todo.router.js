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
// POST - to add data to DB - getting an internal server error

router.post('/', (req, res) => {
   // console.log('req.body', req.body);

    const item = req.body.item;
    const popular = req.body.popular;
    const price = req.body.price;

    const queryText = `
                    INSERT INTO cafe
                        ("item", "popular", "price")
                    VALUES
                        ($1);
                    
                    `;
    pool.query(queryText, [item, popular, price])
    .then(result => {
        console.log('database insert resposnse successful', result);
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('database insert response failed', error);
        res.sendStatus(500);
    });
});

// PUT

// DELETE

module.exports = router;
