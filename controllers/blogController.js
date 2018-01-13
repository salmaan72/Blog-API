const db = require('./../models/index_db');
const mongoose = require('mongoose');

var blogController = {};

// 1. API to create a blog
blogController.createPost = function(req,res){
  var blog = new db.blogModel({
    title: req.body.title,
    _author: req.body._author,
    content: req.body.content
  });
  blog.save().then(function(newBlog){
    res.status(200).json({
      success: true,
      data: newBlog
    });
  }).catch(function(err){
    res.status(500).json({
      message: err
    });
  });
}

// 2. API to view all blogs
blogController.viewAllBlogs = function(req,res){
  db.blogModel.find({}).populate({
    path: '_author',
    select: 'username-_id'
  }).then(function(blogs){
    return res.status(200).json({
      success: true,
      data: blogs
    });
  }).catch(function(err){
    return res.status(500).json({
      message: err
    });
  });
}

// 3. API to view a particular blog
blogController.particularBlog = function(req,res){
  db.blogModel.find({ _id:req.query.id }).populate({
    path: '_author',
    select: 'username-_id'
  }).then(function(blog){
    return res.status(200).json({
      success: true,
      data: blog
    });
  }).catch(function(err){
    return res.status(500).json({
      message: err
    });
  });
}

// 4. API to edit a blog
blogController.editBlog = function(req,res){
  db.blogModel.findById(req.query.id,function(err,blog){
    if(err){
      res.send(err);
    }
    for(key in req.body){
      if(key === "title"){
        blog.title = req.body.title;
      }
      else if(key === "content"){
        blog.content = req.body.content;
      }
    }
    blog.save(function(err){
      if(err){
        res.send(err);
      }
      res.json({ message: "blog updated" });
    });
  });
}

// 5. API to delete a blog
blogController.deleteBlog = function(req,res){
  db.blogModel.findById(req.query.id,function(err,blog){
    if(err){
      res.send(err);
    }
    blog.remove(function(err){
      if (err) {
        console.log(err);
      }
      res.json({ message: "blog deleted successfully"});
    });
  });
}

module.exports = blogController;
