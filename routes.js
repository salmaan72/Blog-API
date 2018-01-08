const express = require('express');
const routes = express();
const userController = require('./controllers/userController');
const blogController = require('./controllers/blogController');

// route to signup a user with username and password
routes.post('/signup',userController.postCredentials);

// route to create a blog
routes.post('/post-blog',blogController.createPost);

// route to get all blogs
routes.get('/all-blogs',blogController.viewAllBlogs);

// route to get a particular blog
routes.get('/particular-blog',blogController.particularBlog);

//route to edit a blog
routes.route('/edit-blog').put(blogController.editBlog).get(blogController.particularBlog);

// route to delete a blog
routes.delete('/delete-blog',blogController.deleteBlog);

module.exports = routes;
