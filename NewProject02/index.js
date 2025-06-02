const express=require('express');
const path = require('path');
const fs=require('fs');
const { log } = require('console');
const app=express();
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));


app.get('/',function(req,res){
    fs.readdir('./files',function(err,files){
        
        res.render('index.ejs',{files:files});
        
    })
})

app.get('/file/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render('show',{filename:req.params.filename,filedata})
        
    })
})

app.get('/edit/:filename',function(req,res){
    
        res.render('edit',{filename: req.params.filename})
        
    })

app.post('/edit',function(req,res){
    fs.rename(`./files/${req.body.prevtitle}`,`./files/${req.body.newtitle}`,function(err){
        res.redirect('/')
    })
})


app.get('/remove/:filename', function (req, res) {
    const filePath = path.join(__dirname, 'files', req.params.filename);

    fs.unlink(filePath, function (err) {
        if (err) {
            console.error("Failed to delete file:", err);
            return res.status(500).send("Error removing the file.");
        }
        res.redirect('/');
    });
});


app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        res.redirect('/')
    });
    
})



app.listen(3000,function(){
    console.log('Server is running on port 3000');
});