const express = require('express');

const bodyParser = require('body-parser');

const app = express();

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
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added Successfully'
  });
  next();
})

app.get("/api/posts", (req,res,next) => {
  const posts = [
    {
      id: "dsbsjhbshb",
      title: "first server-side post",
      content: "This is coming from the server"
    },
    {
      id: "dsbshgufhb",
      title: "second server-side post",
      content: "This is coming from the server"
    }
  ];

  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  })
})

module.exports = app;



/*
  mongoDB: UserName: Rakesh Nallakukkala
           Password: bPZKHv16h8VCUeZG
*/
