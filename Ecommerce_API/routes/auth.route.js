const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const router = require("express").Router();
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async(req, res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
    
            const savedUser = await newUser.save();
            res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//LOGIN
router.post("/login", async(req, res)=>{
    try {
        const user = await userModel.findOne({username: req.body.username});
        if (!user) {
            return res.status(400).send('User not found');
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SEC_KEY,
            {
                expiresIn: "2d"
            }
        )

        const {password, ...others} = user._doc;
        res.status(200).send({...others, accessToken});
            

    } catch (error) {
        res.status(500).send("Error logging in");
    } 
})

module.exports = router