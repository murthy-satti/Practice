const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const cors = require("cors")

const App = express();
//middleware
App.use(express.json());

App.use(cors()) 

//Router defining

App.use(router);

//DB
const db = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://murthysatti321:1234567890@cluster0.l4qic.mongodb.net/"
    );
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error");
  }
};
db();
//model
const model = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
});

const A = new mongoose.model("A", model);

//routes
router.post("/reg", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  const existingUser = await A.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newuser = await A.create({ name, email, password });
  res.status(200).json({ msg: "User crated succesfully", newuser });
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Check if user exists
    // console.log("Before finding in DB")
    const user = await A.findOne({email});

    // If user not found or password is incorrect
    if(!user){
      return res.status(404).json({error:"email invalid"})
    }

    if (user.password !== password) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});



App.listen(8000, () => {
  console.log("Server created succesfully");
});
