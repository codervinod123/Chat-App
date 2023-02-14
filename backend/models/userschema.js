const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
   name:{
    type:String,
    require:true,
   },

   email:{
    type:String,
    require:true,
   },

   phone:{
    type:Number,
    require:true,
   },

   password:{
    type:String,
    require:true,
   },

});


const User=mongoose.model("User",userschema);
module.exports=User;