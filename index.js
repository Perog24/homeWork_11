<<<<<<< HEAD
=======
// const http = require('http');
>>>>>>> 93560f4e6beda28e91ff4d38ebda7033f9596556
const express = require('express');

const server = express();
const PORT = 4300;

<<<<<<< HEAD
server.get('/', (_req, res)=>{
=======
server.get('/', (req, res)=>{
>>>>>>> 93560f4e6beda28e91ff4d38ebda7033f9596556
res.status(200).send(`<h1 style = 'color: red'>Hello, world!</h1>
<a href="/about" >About</a>`);
});

<<<<<<< HEAD
server.get('/about', (_req, res)=>{
=======
server.get('/about', (req, res)=>{
>>>>>>> 93560f4e6beda28e91ff4d38ebda7033f9596556
res.status(200).send(`<h1>aboute page!</h1>
<a href="/" >Home</a>`);
});

<<<<<<< HEAD
server.all('*', (_req, res)=>{
=======
server.all('*', (req, res)=>{
>>>>>>> 93560f4e6beda28e91ff4d38ebda7033f9596556
res.status(404).send(`<h1>Not found :( </h1>`);
});


server.listen(PORT,()=>{
   console.log("start listening on port"+PORT);
});