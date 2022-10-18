var express = require('express');
var router = express.Router();
// var joborder       = require('.././models').joborder;
const db = require('.././models/index');
// const fileUpload = require('express-fileupload');

/* GET home page. */

// router.use(fileUpload());

router.get('/', function(req, res, next) {

  db.JobOrder.findAll()
    .then(function(data){
        res.render('index', { page: req.path,datako: JSON.stringify({ data }, null, 3) } );
    }).catch(function(error){
        res.render('index', { datako: JSON.stringify({ error }, null, 3) } );
    })
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


// test file upload
router.post('/upload', function(req, res) {
    const {name, data} = req.files.file;
    console.log('req>>>>>>>>>', name)
    res.sendStatus(202);
});


module.exports = router;
