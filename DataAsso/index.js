const express=require('express')
const app=express()
const userModel=require('./models/user')
const postModel=require('./models/posts')



app.get("/",(req,res)=>{
    res.send("hey")
})


app.get("/create",async (req,res)=>{
    let userCreate=await userModel.create({
        username:"chinmaya",
        age:20,
        email:"chinmaya@gmail.com"
    })
    res.send(userCreate)
})


app.get("/post/create",async (req,res)=>{
    let post =await postModel.create({
        postData:"Hello",
        user:"6846888c2aed80ab7825cdc1",
    
    })

    let user=await userModel.findOne({_id:"6846888c2aed80ab7825cdc1"})
    user.posts.push(post._id)
    await user.save()

    res.send({post,user})
})

app.listen(3000,()=>{
    console.log("server is listening at port 3000");
    
})