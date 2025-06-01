const express=require('express')

const app=express()

// Middleware to parse JSON and URL-encoded data
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.send("Hello Rcbians")
})

app.get("/profile",function(req,res){
    res.send("Ee sala cup namde")
})

app.listen(3000,()=>{
    console.log("server is listening on 3000")    
})