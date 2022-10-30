var express = require('express');
var router = express.Router();
// var joborder       = require('.././models').joborder;
const db = require('.././models/index');
// const fileUpload = require('express-fileupload');
var path = require('path');
// require('dotenv').config({ path: require('find-config')('.env') })
/* GET home page. */
// const JsonFind = require("json-find");
// router.use(fileUpload());

const authorControl = require('.././Controller/authorController.js')
const imageControl = require('.././Controller/imageController.js')
const emailControl = require('.././Controller/emailController.js')

router.get('/', function(req, res, next) {
    // console.log(process.env.NODE_ENV,process.env.DB_USER, "<<<<<<")
    let test1 = {
        "NodeEnv": process.env.NODE_ENV || "undifined pre",
        "DB_HOST": process.env.DB_HOST , 
        "DateNow": new Date(),
        "testing": "loaded " 
    }
  db.Authors.findAll()
    .then(function(data){
        res.render('index', { 
            page: req.path,datako: JSON.stringify({ data }, null, 3), 
            testdebug: JSON.stringify(test1)
        } );
    
    }).catch(function(error){
        res.render('index', { datako: JSON.stringify({ error }, null, 3) } );
    })
});

router.get('/api', async function(req, res, next) {
    // console.log(process.env.NODE_ENV, "<<<<<<")
    try {
    const myAuthors = await db.Authors.findAll({
        include: [{
          model: db.Imagefiles,
          as: 'image'
        }],
      });;
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).end(JSON.stringify({ myAuthors }, null, 3));
    } catch (e) {
      return next(new Error(e));
    }
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

// Email EndPoint
router.post('/api/email',  emailControl.create);



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
