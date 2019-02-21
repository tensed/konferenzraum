const express=require('express');

const app=express();

app.listen(process.env.port || 3000,function()
{
    console.log("Test Server Started at 3000");

})

app.get('/',()=>console.log("Get Request"));

