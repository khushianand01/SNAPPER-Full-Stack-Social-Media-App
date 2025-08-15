const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://khushi28anand:coldcoffee280@cluster0.l3qjl.mongodb.net/");

const followersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Referring to ObjectId if userId is another document
    ref: 'User',  // Reference to the 'User' model if needed
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid email address'] // Email validation
  },
  password: {
    type: String,
  },
  followers: [followersSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
