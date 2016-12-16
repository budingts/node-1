var express = require('express');
var router = express.Router();
const postModel=require('../models/post')

/* GET home page. */
router.get('/', function(req, res, next) {
  postModel.find((err,posts,next)=>{
    if(err) next(err)
    console.log(posts);
    res.render('index', { title: 'Express',posts:posts });
  })

});

module.exports = router;
