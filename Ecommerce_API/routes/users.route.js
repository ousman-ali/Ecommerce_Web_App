const router = require("express").Router();
const userModel = require("../models/userModel");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

//UPDATE
router.put("/update/:id", verifyTokenAndAuthorization, async (req, res)=>{
    if(req.body.password){
        const salt = bcrypt.genSalt(10);
        req.body.password = bcrypt.hash(req.body.password, salt);
    }

    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, 
        {new: true}
    );
    res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete("/delete/:id",verifyTokenAndAuthorization, async (req, res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const user = await userModel.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    const query = req.query.new
    try {
        const users = query ? await userModel.find().sort({_id: -1}).limit(2) 
        : await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER STATS/users registered per month
router.get("/stats", verifyTokenAndAdmin, async(req, res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        
        const data = await userModel.aggregate([
            {$match: {createdAt: { $gte: lastYear} }},
            {
                $project: {
                    month: { $month: "$createdAt"},
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router
