var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog')

var postSchema=mongoose.Schema({
  title:String,
  content:String
})

var postModel=mongoose.model('post',postSchema)

module.exports=postModel
