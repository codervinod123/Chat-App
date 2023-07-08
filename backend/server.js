const express=require("express");
const app=express();
require("dotenv").config();


const socket=require("socket.io");


app.use(express.json());

require("./db/conn");
app.use(require("./router/route.js"))

app.use(require("./router/messagesRoute.js"));

const middleware=(req,res,next)=>{
    console.log("succesfully validated");
    next();
}




const PORT=process.env.PORT;

const server=app.listen(PORT,()=>{
    console.log(`listening on port Number ${PORT}`);
})


const io=socket(server,{
    cors:{
         origin:"http://localhost:5000/chat",
         credentials:true,
    },
});


global.onlineUsers=new Map();
       

io.on("connection",(socket)=>{
    global.chatSocket=socket;
    socket.on("add-user",(userId)=>{
    onlineUsers.set(userId,socket.id);
  });

  socket.on("send-msg",(data)=>{
    console.log("sendmsg",{data});
    const sendUserSocket=onlineUsers.get(data.to);
    if(sendUserSocket)
    {
         socket.to(sendUserSocket).emit("msg-recieve",data.message);
    }
 });
});

