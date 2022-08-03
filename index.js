const { application } = require("express");
const express=require("express");
const app=express();

app.get("/user",function(req,res){
    res.send("user get");
})
app.use('/router/notification',require('./router/notification'));


app.listen(5000,function(){
    console.log("work server");
})

