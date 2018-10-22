var express = require('express');
var router = express.Router();
var database = require('../public/database');

router.post('/gettable', function (req, res) {
  var table = req.body.table;
  var sql = `SELECT * FROM ${table}`
  var db = new database();
  db.query(sql)
    .then(results => {
      console.log(results);
      res.send(results);
    })
});
module.exports = router;