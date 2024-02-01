const express = require("express");

const router = express.Router();
const User = require("../Models/User");

const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = "gjkdasjajaaqertygvcdj";

router.post(
  "/createuser",
  [
    body("email", "Incorrect Email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
    body("name").isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const salt = await bcrypt.genSalt(10);
const secPassword = await bcrypt.hash(req.body.password,salt)
    try {
       await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        location: req.body.location,


        // name:"aman",
        // email:"aman@gmail.com",
        // password:"654321",
        // location:"Delhi"
      });

      res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "User not create ",
      });
    }
  });




  router.post("/loginuser",
  [
    body("email", "Incorrect Email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),

  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

      let email = req.body.email;
  
      try {
       let userData= await User.findOne(email);
       if(!userData){
        res.status(400).json({
            success: flase,
            message: "Try login with correct credentials",
          });


       }
       const pwsCompare = await bcrypt.compare(req.body.password,userData.password)
             if(!pwsCompare){
        res.status(400).json({
            success: flase,
            message: "Try login with correct credentials",
          });
       }

       const data={
        user:{
          id:userData.id
        }
       }

       const authToken = jwt.sign(data,jwtSecret)

       res.status(200).json({
        success: true,
        authToken:authToken,
        message: "User loggedin successfully!",
      });

    
  
      } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          message: "User not create ",
        });
      }
    }
  );
  







module.exports = router;
