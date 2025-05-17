const router = require("express").Router();
const productModel = require("../models/productModel.js");
const { verifyTokenAndAdmin } = require("./verifyToken.js");

//CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res)=>{
    const newProduct = new productModel(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})


//UPDATE PRODUCT
router.put("/update/:id", verifyTokenAndAdmin, async (req, res)=>{

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id, 
            {
                 $set: req.body
            }, 
            {new: true}
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete("/delete/:id",verifyTokenAndAdmin, async (req, res)=>{
    try {
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).json("product has been deleted")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET PRODUCT
router.get("/find/:id", async (req, res)=>{
    try {
        const product = await productModel.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL PRODUCTS
router.get("/", async (req, res)=>{
    const queryNew = req.query.new
    const queryCategory = req.query.category
    try {
       let products;

        if (queryNew){
            products = await productModel.find().sort({createdAt: -1}).limit(2)
        }else if(queryCategory){
            products = await productModel.find({
                categories: {
                    $in: [queryCategory],
                }
            });
        }else{
            products = await productModel.find();
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
})

// //GET USER STATS/users registered per month
// router.get("/stats", verifyTokenAndAdmin, async(req, res)=>{
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try {
        
//         const data = await userModel.aggregate([
//             {$match: {createdAt: { $gte: lastYear} }},
//             {
//                 $project: {
//                     month: { $month: "$createdAt"},
//                 }
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 }
//                 }
//             }
//         ]);

//         res.status(200).json(data);

//     } catch (error) {
//         res.status(500).json(error);
//     }
// })


module.exports = router
