const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const RoomSchema=new Schema({
    rid:{
        type:String,
        default:''
    },
    rname:{
        type:String,
        default:''
    },
    pid:{
        type:String,
        default:''
    },
    pname:
    {
        type:String,
        default:''
    },
    rbookedtime:
    {
        type:Date,
        default:Date.now()
    },
    rbookedfrom:
    {
        type:Date,
        
    },
    rbooktill:
    {
        type:Date,
    
    },
    rcapacity:
    {
        type:Number,
        default:''
    },
    date:
    {
        type:Date,
        default:Date.now()
    }
});

const Room=mongoose.model('room',RoomSchema);
module.exports=Room;