const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb+srv://Rakesh_123:bPZKHv16h8VCUeZG@cluster0.31qis.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  })
const Post = require('./models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false }));

app.use( (req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET , POST , PATCH , DELETE , OPTIONS"
    );
  next();
});

app.post("/api/posts", (req,res,next) => {
  const post = new Post({
    title : req.body.title,
    content: req.body.content
  });
  post.save();
  console.log(post);
  res.status(201).json({
    message: 'Post added Successfully'
  });
  next();
})

app.get("/api/posts", (req,res,next) => {
  Post.find()
    .then((documents) => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      })
    });
})

module.exports = app;



/*
  mongoDB: UserName: Rakesh_123
           Password: bPZKHv16h8VCUeZG
*/
