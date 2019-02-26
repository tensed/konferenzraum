const express= require('express');
const router = express.Router();
const User=require('../models/user');
const Room=require('../models/room');

//Get a list of users from the db
router.get('/register',function(req,res,next){
    res.send({type:'GET'});

})

router.get('/room',function(req,res,next){
    res.send({type:'GET'});
})

//Add a new user to the db

router.post('/register',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
   
    
});

//Add a new room to the db.

router.post('/room',function(req,res,next){
    Room.create(req.body).then(function(room){
        res.send(room);
    }).catch(next);
   
    
});

//Deleting a room from the db

router.delete('/room/:id',function(req,res,next){
    Room.findByIdAndDelete({_id:req.params.id}).then(function(Room){
        res.send(Room);
    });
    res.send({type:'DELETE'});
    
})


//Delete a user from the db
router.delete('/register/:id',function(req,res,next){
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
        res.send(user);
    });
    res.send({type:'DELETE'});
    
})




module.exports=router;

