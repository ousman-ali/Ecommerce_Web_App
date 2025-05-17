const express = require("express");
const app  = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");
const orderRoute = require("./routes/order.route");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("dB Connection successfull")
}).catch((err)=>{
    console.log(error);
})

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Backend is running on port 5000");
})