var express 	= require('express');
var bodyParser 	= require('body-parser');
var joborder 	= require('./models').joborder;


var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/joborder', (req,res)=>{
	joborder.create(req.body)
	.then(function(data){
		res.json({da:data});
	}).catch(function(error){
		res.json({er:error})
	})
})

app.get('/',(req,res)=>{
	res.send('server is running');
})

var port = process.env.PORT || 3000;
app.listen(port,() => console.log('server is running at port'+ port));