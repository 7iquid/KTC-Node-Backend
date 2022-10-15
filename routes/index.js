var express = require('express');
var router = express.Router();
var joborder       = require('.././models').joborder;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  console.log('=============>', joborder)
  res.render('index', { title: 'Express' });
});

module.exports = router;
