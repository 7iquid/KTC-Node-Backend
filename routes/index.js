var express = require('express');
var router = express.Router();
// var joborder       = require('.././models').joborder;
const db = require('.././models/index');
// const fileUpload = require('express-fileupload');
var path = require('path');
/* GET home page. */
const JsonFind = require("json-find");
// router.use(fileUpload());

const authorControl = require('.././Controller/authorController.js')
const imageControl = require('.././Controller/imageController.js')

router.get('/', function(req, res, next) {
    // console.log(process.env.NODE_ENV, "<<<<<<")
    let test1 = process.env.NODE_ENV+"____" + process.env.DB_HOST +"_____________<"+ new Date()


  db.Authors.findAll()
    .then(function(data){
        res.render('index', { 
            page: req.path,datako: JSON.stringify({ data }, null, 3), 
            debug: test1
        } );
    
    }).catch(function(error){
        res.render('index', { datako: JSON.stringify({ error }, null, 3) } );
    })
});

// Author EndPoint
router.post('/api/author',  authorControl.create);
router.get('/api/author',  authorControl.fetchAll);
router.get('/api/author/:authorId',  authorControl.fetchOne);
router.put('/api/author/:authorId',  authorControl.update);
router.delete('/api/author/:authorId',  authorControl.delete);

// Image EndPoint
router.post('/api/image',  imageControl.create);
router.get('/api/image',  imageControl.fetchAll);
router.delete('/api/image/:imageId',  imageControl.delete);


// router.route('/api')
//     .get(function(req, res, next) {
//     db.JobOrder.findAll()
//         .then(function(data){
//             res.setHeader('Content-Type', 'application/json');
//             res.status(200).end(JSON.stringify({ data }, null, 3));
//         }).catch(function(error){
//             res.status(400).json({error});
//         })

//     });



// router.post('/api', function(req, res, next) {

//   db.JobOrder.create(req.body)
//     .then(function(data){
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).end(JSON.stringify({ data }, null, 3));
//     }).catch(function(error){
//         res.status(400).json({error});
//     })

// });



// router.post('/media/:imageId', (req, res) => {
//     if(!req.files) return res.status(400).send ("No files were uploaded!!");

//     const filesfile = req.files.file;
//     const uploadTo = `uploads/media/${filesfile.name}`;

//     filesfile.mv(uploadTo, (err) => {
//       if(err) return res.status(500).send(err);

//     res.send(`File uploaded to <a href="${uploadTo}" >${uploadTo}</a>`);
//   });
// })

router.get('/uploads/media/:filename', ({params}, res) => {

    var options = {
        root: path.join(__dirname,'..', 'uploads/media/')
    };

    res.sendFile(params.filename, options);

})

module.exports = router;
