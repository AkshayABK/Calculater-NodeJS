const express = require('express')
const router = express.Router();
const mathUser = require('../Model/schema');

//Multiplaction 
router.post('/multiplication', async (req,res)=>{
    let student = new mathUser({
        Number1:req.body.Number1,
        Number2:req.body.Number2,      
    })
    try {
        let mathSaver = student.save(function(data){
            const mult = student.Number1*student.Number2
            res.send("your answer is : "+ mult)
        });
    } catch (error) {
        res.status(404).send("An error")    
    }
})

//Devidation
router.post('/devide', async (req,res)=>{
    let student = new mathUser({
        
        Number1:req.body.Number1,
        Number2:req.body.Number2
    })
    try {
        let devide = await (student.Number1)/(student.Number2)
        res.send("Your Answer is : "+ devide);
        const mathSaver = await student.save(devide);
    }catch (error) {
        res.status(404).send("An error")    
    }
})

//substraction
router.post('/substraction', async (req,res)=>{
    let student = new mathUser({
        
        Number1:req.body.Number1,
        Number2:req.body.Number2
    })
    try {
        // const mathSaver = await student.save();
        let sub = (student.Number1)-(student.Number2)
        res.send("Your Answer is : "+ sub);
        
    }catch (error) {
        res.status(404).send("An error")    
    }
})
module.exports=router;