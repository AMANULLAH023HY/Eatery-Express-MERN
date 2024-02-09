const express = require('express');
const router = express.Router();
const Order = require('../Models/Orders')

router.post('/orderData',async(req,res)=>{
    let data = req.body.order_data
    
    await data.splice(0,0,{ Order_date:req.body.order_date});

    let eId = await Order.findOne({'email':req.body.email});

    console.log(eId);

    if(eId === null ){

        try {
                await Order.create({

                    email:req.body.email,

                    order_data:[data]
                }).then(()=>{
                    res.status(200).json({
                        success:true,
                        message:"Order Successfull!"
                    })
                })
                console.log("Insert")
        } 
        catch (error) {

                    res.status(401).json({
                        success:false,
                        message:error || "Order Failed"
                    })
            
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {$push: {order_data:data}}
                ).then(()=>{
                    res.status(200).json({
                        success:true,
                        message:"Order updated successfully!"
                    })
                })
        } catch (error) {
            res.status(402).json({
                success:false,
                message:`Server Error , ${error.message}`
            })
            
        }
    }

    
})


module.exports = router;