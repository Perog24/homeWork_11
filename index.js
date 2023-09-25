const express = require('express');

const server = express();
const PORT = 4300;

server.get('/', (_req, res)=>{
res.status(200).send(`<h1 style = 'color: red'>Hello, world!</h1>
<a href="/about" >About</a>`);
});

server.get('/about', (_req, res)=>{
   
res.status(200).send(`<h1>aboute page!</h1>
<a href="/" >Home</a>`);
});

server.all('*', (_req, res)=>{
res.status(404).send(`<h1>Not found :( </h1>`);
});


server.listen(PORT,()=>{
   console.log("start listening on port"+PORT);
});