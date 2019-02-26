const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt');

const UserSchema= new Schema({
    'fname':{
        type:String,
        default:''
        },
    'lname':{
        type:String,
        default:''
    },
    'username':{
        type:String,
        default:''
    },
    'password':{
        type:String,
        default:''
    }
    });

    UserSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      };
      
      UserSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      
      



const User=mongoose.model('user',UserSchema);

//Exports the schemas so that it could be used by others.
module.exports=User;
