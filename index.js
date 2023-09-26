const express = require('express');
const path = require('path');

const server = express();
const PORT = 4300;

server.use(express.static(path.resolve(__dirname, 'public')));

server.all('*', (req, res)=>{
res.status(404).sendFile(path.resolve(__dirname, 'pageErrors/404.html'));
});


server.listen(PORT,()=>{
   console.log("start on port: "+PORT);
});