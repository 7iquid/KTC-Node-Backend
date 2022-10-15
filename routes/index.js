var express = require('express');
var router = express.Router();
// var joborder       = require('.././models').joborder;
const db = require('.././models/index');
const JobOrderRepository = require('../models/Controller/task.repository');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api', function(req, res, next) {

  db.JobOrder.findAll()
    .then(function(data){
        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify({ data }, null, 3));
    }).catch(function(error){
        res.status(400).json({error});
    })

});

router.post('/api', function(req, res, next) {

  db.JobOrder.create(req.body)
    .then(function(data){
        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify({ data }, null, 3));
    }).catch(function(error){
        res.status(400).json({error});
    })

});

// router.delete('/api/:id', function(req, res, next) {

//   JobOrderRepository
//   db.JobOrder.create(req.body)
//     .then(function(data){
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify({ data }, null, 3));
//     }).catch(function(error){
//         res.json({er:error});
//     })

// });


module.exports = router;
