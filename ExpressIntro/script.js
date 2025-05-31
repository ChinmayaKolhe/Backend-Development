const express=require('express')
const app=express()

app.use(function(req,res,next){
    console.log('Request URL:', req.url);
    next(); // Pass control to the next middleware function
});

app.use(function(req,res,next){
    console.log('Aur ek baar', req.url);
    next(); // Pass control to the next middleware function
});

app.get('/',function(req,res){
    res.send('Hello World')
})

// Error handling middleware
app.get('/profile',function(req,res,next){
    return next(new Error('Profile not found'));
})
// This will be called if an error occurs in the previous middleware
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000,()=>{
    console.log('server is listening on 3000');
})