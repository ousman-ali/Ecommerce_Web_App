const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const orderModel = require("../models/orderModel");


//CREATE ORDER
router.post("/", verifyToken, async (req, res)=>{
    const newOrder = new orderModel(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})


//UPDATE ORDER
router.put("/update/:id", verifyTokenAndAdmin, async (req, res)=>{

    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(
            req.params.id, 
            {
                 $set: req.body
            }, 
            {new: true}
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE ORDER
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        await orderModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        const orders = await orderModel.findOne({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
      try {
        const orders = await orderModel.find();
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json(error)
      }
})

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async(req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try {
       const income = await orderModel.aggregate([
            {$match:{createdAt: {$gte: previousMonth}}},
            {
                $project: {
                    month: { $month: { $toDate: "$createdAt" } },
                    sales: "$amount"
                }
            },
            {  $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
       ])
       res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }

})

module.exports = router