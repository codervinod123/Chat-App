const express=require("express");
const app=express();
require("dotenv").config();

app.use(express.json());

require("./db/conn");
app.use(require("./router/route.js"))

app.use(require("./router/messagesRoute.js"));

const middleware=(req,res,next)=>{
    console.log("succesfully validated");
    next();
}




const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`listening on port Number ${PORT}`);
})