const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/react', { useMongoClient: true });
mongoose.connection.on('connected',()=>{
    console.log('mongodb connet success');
})
app.get('/',(req,res)=>{
    res.end('123');
});
app.listen('9093',function(){
    console.log('listen to 9093');
});