const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    posts:{
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
});

const PostSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
    },
    bedroom: {
        type: String,
    },
    bathroom: {
        type: String,
    },
    latitude:{
        type: Number,
    },
    longitute:{
        type: Number,
    },
    User: {
         type: Schema.Types.ObjectId,
      ref: "User"

    }
});

const user = mongoose.model("User", UserSchema);
const post = mongoose.model("Post", PostSchema);

module.exports = { user, post };
