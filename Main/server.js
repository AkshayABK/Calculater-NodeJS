const express = require('express')
const app = express();
var mongoose = require('mongoose');
const router = require('../Router-Handler/router')


let db = 'mongodb+srv://AkshayKore:abk17102000@cluster0.v0cm2.mongodb.net/MathDB?retryWrites=true&w=majority'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true},()=> {
    console.log("DB Connected Succesfully!!");
})
app.use(express.json())

app.listen(7000, ()=>{
    console.log("Server Connected Succesfully!!");
})

app.use('/math/user', router)