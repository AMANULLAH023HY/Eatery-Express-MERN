const express = require('express');

const router = express.Router();
const User = require('../Models/User');


router.post('/createuser',async(req,res)=>{
    try {
        User.create({
            // name:"Adil",
            // email:"aman123@gmail.com",
            // password:"123456",
            // location:"hyderabad"
            
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            location:req.body.location
        })

        res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"User not create "
        })

        
    }
});

module.exports = router;