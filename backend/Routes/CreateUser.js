const express = require('express');

const router = express.Router();
const User = require('../Models/User');

const {body, validationResult} = require('express-validator');

router.post('/createuser',
[
    body('email',"Incorrect Email").isEmail(),
    body('password',"Incorrect Password").isLength({min:5}),
    body('name').isLength({min:5})
]

,async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        User.create({
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