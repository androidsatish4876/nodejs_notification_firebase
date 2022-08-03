const express=require("express");
const fetch=require('node-fetch');


const router=express.Router();

router.post("/sendToAll",(req,res)=>{
var notification={
    'title':'title notification',
    'text':'subtitle'
};
var fcm_tokens=[];
var notification_body={
    'notification':notification,
    'registration_ids':fcm_tokens
};


    fetch('https://fcm.googleapis.com/fcm/send',{
        'method':'POST',
        'header':{
            'Authorization':'key='+'pastekey',
            'Content-Type':'application/json'
        },
        'body':JSON.stringify(notification_body)
    }).then(()=>{
        res.status(200).send("success");
    }).catch(()=>{
        res.status(400).send("wrong");
    })
});

module.exports=router