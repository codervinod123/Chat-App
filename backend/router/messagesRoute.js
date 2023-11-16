const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");

const Message=require("../models/messageSchema");



router.post('/addMessage',async(req,res)=>{
     try {
        const {from,to,message}=req.body;
        const data=await Message.create({
                message:{text:message},
                users:[from,to],
                sender:from,
        })

        if(data)
            return res.status(200).send(data);
        return res.status(400).send("failed due to some issue");


     } catch (error) {
          return res.status(400).send(error)
     }
})



router.post('/getMessage',async(req,res)=>{
    
    try {
    

        const {from,to}=req.body;
        const messages=await Message.find({
           users:{
               $all :[from,to],
             },
       }).sort({updatedAt: 1});
       
       const projectMessages=messages.map((msg)=>{
                   return {
                       fromSelf: msg.sender.toString()===from,
                       message:msg.message.text,
                   };
                   
               });
               console.log(messages);
               console.log(from);
              
               res.json(projectMessages);
          


    
       
    } catch (error) {
       return res.status(400).send("Something went wrong",error)
    }
})




module.exports=router;