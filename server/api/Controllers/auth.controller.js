const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user } = require("../Model/schema.js");
const validator = require("email-validator");
const ApiError = require("../utilities/ApiError.js");

const saltRounds = 10;
const SECRET = "jwttoken";
const refreshSECRET = "jwtrefreshtoken";

const register = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({ message: "fields are required" });
    }

    const isValid = validator.validate(email);
    if (!isValid) {
      return res.status(400).json({ message: "Email is not valid" });
    }

    if (password.length < 3) {
      return res.status(400).json({
        message: "password length should be above three characters",
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new user({ username, email, password: hashedPassword });
    await newUser.save();
    console.log(newUser);

    const token = jwt.sign({ id: newUser.id }, SECRET);
    newUser.token = token;
    await newUser.save();

    return res.status(200).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({ message: "field is required" });
    }

    const userExist = await user.findOne({ email });
    if (!userExist) {
      return res.status(401).json({ message: "email not found" });
    }
    console.log(userExist);

    const comparePassword = await bcrypt.compare(password, userExist.password);
    if (!comparePassword) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const accessToken = jwt.sign({ id: userExist.id }, SECRET, {
      expiresIn: "1m",
    });
    const refreshToken = jwt.sign({ id: userExist.id }, refreshSECRET, {
      expiresIn: "5m",
    });

    res.cookie("accessToken", accessToken, { maxAge: 60000 });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 300000,
      httpOnly: true,
    });

    return res.status(201).json({ message: "login successfully", accessToken, userExist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { register, login };
