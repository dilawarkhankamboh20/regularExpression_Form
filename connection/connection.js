const mongoose=require("mongoose")



mongoose.connect("mongodb://localhost:27017/regular").then(()=>{
console.log("connection is success");
}).catch((err)=>{
    console.log("opps connection faild");
})