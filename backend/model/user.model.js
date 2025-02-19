import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    userName : {type : String ,required : true},
    email : { type : String , unique : true },
    password : {type : String , required : true},
    role : { type : String ,enum: ['user','admin'] , default : 'user'} //default role is 'user'
})

const User = mongoose.model('Users' , UserSchema );
export default User ; 
