const express=require('express');
const router=require('./routes/api');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');


//Setting up express application.
const app=express();

//Using body parser to convert json data.
app.use(bodyparser.json());

//Connect to mongodb
mongoose.connect("mongodb://localhost/konferenzraum",{useNewUrlParser:true});
mongoose.Promise=global.Promise;


//Using the routes that have been defined.
app.use(router);



//Initialize routes.
app.use('/register',require('./routes/api'));
app.use('/room',require('./routes/api'));

//Error Handling Middleware
app.use(function(err,req,res,next)
{
 //console.log(err);   
 res.status(422).send({error:err.message});
});

//Listening for requests.
app.listen(process.env.port ||3000,function()
{
    console.log("Test Server Started at 3000");

});

//app.get('/',()=>console.log("Get Request"));

