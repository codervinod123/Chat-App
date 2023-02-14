const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");

const User=require("../models/userschema");

router.get('/',(req,res)=>{
    res.send("hello from router side");
})


router.post('/register',async(req,res)=>{
    const {name,email,phone,password}=req.body;
    if(!name || !email || !phone || !password )
      return res.status(400).json({Message:"Please fill every details"});
  
      try {
          const isExist=await User.findOne({email:email});
          if(isExist)
              return res.status(400).json({Message:"Email id is alredy Exist"});
           
         const hashedPass=await  bcrypt.hash(password,10);    
         const user=new User({name,email,phone,password:hashedPass});
         user.save();

         delete user.password;
        
        return res.status(200).json({message:"done bro",user});

  } catch (error) {
    res.status(400).json({Message:"User has not added to the database"});
  }

})


router.post("/login",async(req,res)=>{
  
     const {email,password}=req.body;
     if(!email || !password) 
        return res.status(400).json({Message:"Please fill email and pass both"});
     

    try {
      
        const isExist=await User.findOne({email:email});
        
        if(isExist)
        {
          const user=await User.findOne({email:email});
         
          const isMatched=await bcrypt.compare(password,isExist.password);
          if(isMatched)
          {
           
             return res.status(200).json({Message:"Login Successfully",user});
             
          }
          else
             return res.status(400).json({Message:"Can't login please login with valid pass"});  
        }
        return res.status(400).json({Message:"Can't login please login with valid email"});

    } catch (error) {
        return res.status(400).json({Message:"Can't login please login with valid credentil"});
    }

})




//fetchin all registered user from database except only logged in candidate

router.get("/getAlluser/:_id",async(req,res)=>{
    
  try {
    
    const alluser=await User.find({_id:{$ne:req.params._id}}).select(["_id","name","email","phone"]);
    return res.status(200).json(alluser);
    

  } catch (error) {
    return res.status(400).json("cant fetch all users");
  }

})



module.exports=router;