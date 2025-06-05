const express = require('express');

const app = express();

const userModel=require('./usermodel');


app.get('/', function(req, res) {
    res.send("Hello");
});

app.get('/create', async function(req, res) {
    let createduser= await userModel.create(
    {
        name:"Chinmaya",
        username:"Cinmaya123",
        email:"chinmayakolhe@gmail.com"
    }
    )
    res.send(createduser)
});

app.get('/createtwo', async function(req, res) {
    let createduser= await userModel.create(
    {
        name:"Rudra",
        username:"RudraKolhe",
        email:"rudrakolhe@gmail.com"
    }
    )
    res.send(createduser)
});

app.get('/update', async function(req, res) {
    let updatedUser=await userModel.findOneAndUpdate({username:"Rudra123"},{name:"Rudra Kolhe"},{new:true})
    res.send(updatedUser)
    console.log("User info updated");
    
});

app.get("/read", async function(req, res) {
    let user=await userModel.find()
    res.send(user)
});

app.get("/read", async function(req, res) {
    let user=await userModel.find({name:"Chinmaya"})
    res.send(user)
});

app.get("/delete",async function(req,res){
    let usersdeleted=await userModel.findOneAndDelete({username:"Chinmaya"})
    res.send(usersdeleted)
})

app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
});
