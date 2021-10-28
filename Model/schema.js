var mongoose = require('mongoose');

let mathSchema = new mongoose.Schema({
    Number1:{
        type:Number,
        required:true
    },
    Number2:{
        type:Number,
        required:true
    },

})

const schema =mongoose.model('Maths', mathSchema)
module.exports=schema;