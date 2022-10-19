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
// router.post('/upload', function(req, res) {
//      if (Object.keys(req.files.file).length == 0) {
//       return res.status(400).send('No files were uploaded.');
//      }

//      let uploadFile = req.files.file;

//      uploadFile.mv(fileDir, function(err) {
//       if (err)
//        return res.status(500).send(err);

//       res.send('File uploaded!');
//      });



//  //    let sampleFile;
//  //    let uploadPath;
//  //    const {name, data} = req.files.file;
    
//  //    sampleFile = req.files.file
//  //    console.log('=======>>', sampleFile.name)
//  //    // uploadPath = __dirname + '/uploads/' + sampleFile.name;    
//  //    console.log('req>>>>>>>>>', sampleFile.name)


//  // sampleFile.mv(`${__dirname}/upload/${sampleFile.name}`, err => {
//  //  if (err) {
//  //   return res.status(500).send(err);
//  //  }

//  //  res.json({ file: `public/${sampleFile.name}` });
//  //  console.log(res.json);
//  // });


//   // res.sendStatus(201)
// });


router.post('/upload', (req, res) => {
  if(!req.files) return res.status(400).send ("No files were uploaded!!");

  const filesfile = req.files.file;
  const uploadTo = `uploads/media/${filesfile.name}`;

  filesfile.mv(uploadTo, (err) => {
    if(err) return res.status(500).send(err);

    res.send(`File uploaded to <a href="${uploadTo}" >${uploadTo}</a>`);
  });
})

module.exports = router;
