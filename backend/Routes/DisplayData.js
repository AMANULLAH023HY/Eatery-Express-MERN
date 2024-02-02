const express = require("express");

const router = express.Router();


router.post('/foodData',(req,res)=>{
    try {
console.log(global.food_items)
        res.send([global.food_items,global.foodCategory])
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Data not Fetched"
        })
    }
})

module.exports = router;