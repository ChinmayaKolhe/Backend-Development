const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/dataass', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const userSchema=mongoose.Schema({
    username: String,
    email:String,
    age:Number,
    posts:[
        { type:mongoose.Schema.Types.ObjectId}
    ]
})

module.exports=mongoose.model('user',userSchema)

