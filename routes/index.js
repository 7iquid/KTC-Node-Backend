var express = require('express');
var router = express.Router();
// var joborder       = require('.././models').joborder;
const db = require('.././models/index');
// const fileUpload = require('express-fileupload');
var path = require('path');
/* GET home page. */

// router.use(fileUpload());

router.get('/', function(req, res, next) {

  db.blogs.findAll()
    .then(function(data){
        res.render('index', { page: req.path,datako: JSON.stringify({ data }, null, 3) } );
    }).catch(function(error){
        res.render('index', { datako: JSON.stringify({ error }, null, 3) } );
    })
});


router.route('/api')
    .get(async (req, res) => {
        res.status(202).end()
    })


    .post(  async (req, res) => {
        const body = req.body
        const filesfile = req.files?.file;
        const id={}

        await db.blogs.findOne({ where: { author: body.author } })
            .then(function(data){
                if (data==null){
                    db.blogs.create(body)
                    console.log("==============")
                }
                res.setHeader('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify({ data }, null, 3));
                

            })

        // await console.log(project.dataValues)
        // filesfile.push({"imageId": body.author })

        // path.join(__dirname,'..', 'uploads')
        // db.imagefiles.create(req.files.file)
        // let {author} = req.body

       // const filesfile = req.files.file;
        // console.log(body, filesfile)
        
        // console.log(req.files.file)

        res.status(202).end();
    })









    .put(function(req, res, next) {
        res.status(202).end()
    })
    .delete(function(req, res, next) {
        res.status(202).end()
    })


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



// router.post('/upload', (req, res) => {
//     if(!req.files) return res.status(400).send ("No files were uploaded!!");

//     const filesfile = req.files.file;
//     const uploadTo = `uploads/media/${filesfile.name}`;

//     filesfile.mv(uploadTo, (err) => {
//       if(err) return res.status(500).send(err);

//     res.send(`File uploaded to <a href="${uploadTo}" >${uploadTo}</a>`);
//   });
// })

// router.get('/upload', (req, res) => {
//     // res.sendFile(__dirname + "../uploads/media/abstergo.png" );
//     var options = {
//         root: path.join(__dirname,'..', 'uploads')
//     };
//     var fileName = 'abstergo.png';
//     res.sendFile(fileName, options);

// })

module.exports = router;
