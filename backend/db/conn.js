const mongoose=require("mongoose");

const MONGO_URL=process.env.MONGO_URL;
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
.then(()=>{
   console.log("successfully connected to the databas");
})
.catch((err)=>{
  console.log("error in connecting to the datatbase",err);
})