const cookieParser = require('cookie-parser')
const express=require('express')
const app=express()
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.cookie("username","chinmaya kolhe")
    res.send("cookie set successfully")
    
})

app.get('/read',(req,res)=>{
    console.log(req.cookies);
    res.send("cookie read successfully, check console for details")
    
})

app.listen(3000,()=>{
    console.log('server is listening at port no:3000');
    
})