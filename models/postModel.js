// models/postModel.js
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

let postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
