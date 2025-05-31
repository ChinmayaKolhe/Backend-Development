const { log } = require('console');
const fs=require('fs');

fs.writeFile("test.txt","Hello RCBians...!",function(err){
    if(err) console.log(err);
    else console.log("done ");
    
    
})


fs.readFile("test.txt",function(err,data){
    if(err) console.log(err);
    else console.log("done",data);

})


fs.appendFile("test.txt","We Love You RCB...! Virat...We Stand By You always...",function(err){
    if(err) console.log(err);
    else console.log("done appended");
       
})

fs.rename("test.txt","rcb.txt",function(err){
    if(err) console.log(err);
    else console.log("Renamed successfully");
    
    
})

fs.copyFile("rcb.txt","./copy2/newcopy.txt",function(err){
    if(err) console.log(err);
    else console.log("done copied");
})


fs.unlink("rcb.txt",function(err){
    if(err) console.log(err);
    else console.log("done deleted");
     
})

fs.rmdir("./blankfolder",{recursive:true},function(err){
    if(err) console.log(err);
    else console.log("done");
    
    
})
 
fs.rm("./newfolder/new.txt",{recursive:true},function(err){
    if(err) console.log(err);
    else console.log("Done deleted file contained directory");
    
    
})

//rm deleted the folder which contains the file also....rmdir is oldest way to delted the directory but if we don't mention recursive then it doesn't deletes the directory which contains files...to delete directory with files recursive is used with rmdir


