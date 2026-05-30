const express =  require("express");
const { UserModel } = require("../model/UserModel.js");
const { protect } = require("../middleware/authM.js");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //user does not exists
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    //user exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await UserModel.create({ username, email, password });
    const token = generateToken(user._id);
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (err) {
    console.error("Signup Error:", err);

  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
  }
});


//LOGIN route
//when it takes the request then it redirects to login page
router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  // asks for details if user does not exists
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const user = await UserModel.findOne({ email });

    //match the password
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //else
    const token = generateToken(user._id);
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (err) {
     console.error("Signup Error:", err);
  res.status(500).json({
    error: err.message,
    stack: err.stack,
    message: err.message,
  });
  }
});


// (path, function, async())
//protect function from middleware
//use this route to get access to the currently logged in user info
router.get("/me", protect, async(req, res) =>{
    res.status(200).json(req.user);
})


//Generate JWT token
//takes argument as user id and returns token for the id
//when user sends token back to server, we can decode and know who the sender is
//token is only known by the server adn ensures that nobody else can create fake tokens unless they know this secret
const generateToken = (id) =>{
return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"})
}


module.exports = router;