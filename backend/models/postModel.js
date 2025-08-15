const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://khushi28anand:coldcoffee280@cluster0.l3qjl.mongodb.net/");

const likesScheme = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId
    ref: "User" // Reference User model
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const commentsScheme = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId
    ref: "User" // Reference User model
  },
  name: String,
  comment: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const postSchema = new mongoose.Schema({
  post: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId for user reference
    ref: "User" // Reference User model
  },
  likes: [likesScheme],
  comments: [commentsScheme],
  postImg: {
    type: String,
    default: "none"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
