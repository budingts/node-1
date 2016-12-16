const express = require('express');
const postModel=require('../models/post')
const router = express.Router();

router.get('/', (req, res) => {
  res.render('post', {
    title: 'post'
  })
})

router.uses('/',(req,res,next)=>{
  console.log(req.body);
  var title=req.body.post_title
  var content=req.body.post_content
  var post=new postModel({title:title,content:content})
  post.save((err,post,next)=>{
    if(err) next(err)
    console.log(post);
    res.redirect('/')
  })
})

module.exports = router
