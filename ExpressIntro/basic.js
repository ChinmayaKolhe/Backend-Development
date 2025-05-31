const express=require('express')

const app=express()

app.get("/",function(req,res){
    res.send("Hello Rcbians")
})

app.get("/profile",function(req,res){
    res.send("Ee sala cup namde")
})

app.listen(3000,()=>{
    console.log("server is listening on 3000")    
})