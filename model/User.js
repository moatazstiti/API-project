const mongoose =require('mongoose');
const {Schema,model}=mongoose;

const userSchema= new Schema({
    firstname:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },

    university:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    



})


model.exports = User = model ("user",userSchema);