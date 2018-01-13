# Blog-API
A Restful API for blog application
## Getting Started
This is a simple Api with basic CRUD operations and comprehensible code for blog application. Basics of expressjs, Mongodb and mongoose is necesssary to understand this Api.
## Prerequisites
The following applications had to be installed:
- Nodejs  -  In case you have no idea what Node is, checkout [node official website](https://nodejs.org/en/about/)
- Expressjs - express is a framework on top of Node, checkout [express](http://expressjs.com/)
- mongodb - NoSql database, [mongodb official website](https://www.mongodb.com/)
- mongoose - mongoose is a framework on top of express to interact with mongodb, checkout [mongoose](http://mongoosejs.com/)
## Installation
Shift in the project directory and execute the following command:
- `#npm install`  
  This command installs all the dependencies listed in package.json file.
## How to use the Api
Six basic operations can be performed in total that helps in understanding how a Restful Api actually works.
#### 1. Register with username and password
In postman type in the following URL for a post request  
  
`http://localhost:3000/api/signup`  
  
send a JSON object through body parameter. It looks something like this:
```javascript
{
  "username":"your_user_name",
  "password":"your_password"
}
```
This post request creates a Document in mongodb with an additional _id and createdAt attributes
```mongodb
"_id" : ObjectId("5a51d84feeb01e1a67dd81ca"),
"username" : "your_user_name",
"password" : "your_password",
"createdAt" : ISODate("2018-01-07T08:20:27.065Z")
```
**Note:** Additional attribute `_id` generated for the above mongodb document is a unique identification number that is unique for every json object. This is auto-generated by the mongodb and is used to perform further operations of this Api.

#### 2. API to create a blog
post request, url `http://localhost:3000/api/post-blog`  
post with the following data through body parameters
```javascript
{
  "title":"title_of_the_blog_post",
  "_author":"5a51d84feeb01e1a67dd81ca",
  "content":"write_an_article"
}
```
**Note:** `_author` attribute is assigned with ObjectId of an existing user.

#### 3. API to view all blogs
In postman type in the following URL for a get request:  
`http://localhost:3000/api/all-blogs`  
This operation gets all the blog posts stored in the database.

#### 4. API to view a particular blog
get request, url `http://localhost:3000/api/particular-blog`  
In the query parameters add a key **id** and value **objectId** of a certain blog post that is to be displayed.
Or construct the URL like this: `http://localhost:3000/api/particular-blog?id=[object id]` exclude brackets.

#### 5. API to edit a blog
put request method, url `http://localhost:3000/api/edit-blog`  
In the query parameters add a key **id** and value **ObjectId** of a particular blog that is to be updated.
In the body parameters create a json object with data to be updated.   
For instance, if title of the blog has to be updated, then pass the following through body parameters:
```
{
  "title":"new_updated_title"
}
```
If the blog is updated successfully, then an acknowledgement is sent.
```
//acknowledgement
{
    "message": "blog updated"
}
```
A `get` method is also associated with the same url, just to confirm the changes. Leave the url as it is and change the http request method to `get` in the postman app.

#### 6. API to delete a blog
delete request method, url `http://localhost:3000/api/delete-blog`  
In the query parameters add a key **id** and value **ObjectId** of a particular blog to be deleted.
