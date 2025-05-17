const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const cartModel = require("../models/cartModel");


//CREATE CART
router.post("/", verifyToken, async (req, res)=>{
    const newCart = new cartModel(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})


//UPDATE CART
router.put("/update/:id", verifyTokenAndAuthorization, async (req, res)=>{

    try {
        const updatedCart = await cartModel.findByIdAndUpdate(
            req.params.id, 
            {
                 $set: req.body
            }, 
            {new: true}
        );
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE CART
router.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        await cartModel.findByIdAndDelete(req.params.id)
        res.status(200).json("cart has been deleted")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        const cart = await cartModel.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
      try {
        const carts = await cartModel.find();
        res.status(200).json(carts);
      } catch (error) {
        res.status(500).json(error)
      }
})

module.exports = router