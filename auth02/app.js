const cookieParser = require('cookie-parser')
const express=require('express')
const app=express()
const path=require('path')
const userModel=require('./models/user')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


app.set("view engine","ejs")
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,"public")))

app.use(cookieParser())



app.get('/',function(req,res){
    res.render('index')
})

app.post('/create',(req,res)=>{
    let {username,email,password,age}=req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
              let userCreate=await userModel.create({
                    username,
                    email,
                    password:hash,
                    age
               })
               let token=jwt.sign({email},"shhhhhhhhhhh")    
               res.cookie("token",token)        
             res.send(userCreate)
        })
        
    })
    
    
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async (req,res)=>{
    let user=await userModel.findOne({email:req.body.email})
    if(!user) return res.send("Something went wrong")

    bcrypt.compare(req.body.password,user.password,function(err,result){
        if(result) {
            let token=jwt.sign({email:user.email},"shhhhhhhhhhh")    
            res.cookie("token",token)  
            res.send("Yes you can login")
        }
        else res.send("Something is wrong")
    })
})

app.get('/logout',function(req,res){
    res.cookie("token","")
    res.redirect("/")
})

app.listen(3000,()=>{
    console.log('server is listerning at 3000');
    
})