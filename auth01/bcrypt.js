
const express=require('express')

const app=express()
const bcrypt=require('bcrypt')

//encrypt
app.get('/',(req,res)=>{
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash("Pass123",salt,function(err,hash){
            console.log(hash);
            
        })
    })
})

//compare
app.get('/compare',(req,res)=>{
    bcrypt.compare("Pass123","$2b$10$31/XUraKgDJfZN074u3Mo.3lkW4wVsmeIdT7Z2xxyE99L.VRGgEiy",function(err,result){
        console.log(result);
        
    })
})



app.listen(3000,()=>{
    console.log('server is listening at port no:3000');
    
})