const express = require("express");
const connectDB = require("./Model/db");
const Auth = require("./routes/auth.route");
const User = require("./routes/user.route");
const Post = require("./routes/post.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const PORT = 3000;

// endpoints
app.use("/api/auth/", Auth);
app.use("/api/user/", User);
app.use("/api/post/", Post);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
