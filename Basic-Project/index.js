const express=require('express');
const path=require('path');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));   // Serve static files from the "public" directory. 
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
});

app.get("/profile/:username",function(req,res){
    res.send("Hello " + req.params.username + "!");
});

app.get("/profile/:username/:age",function(req,res){
    res.send("Hello " + req.params.username + "!"+"Age="+req.params.age);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});