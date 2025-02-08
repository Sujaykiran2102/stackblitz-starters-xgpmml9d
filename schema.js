const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  commentedAt: {
    type: Date,
    default: Date.now
  }
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    minlength: 5
  },
  content: {
    type: String,
    required: true,
    minlength: 50
  },
  author: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  category: {
    type: String,
    default: 'General'
  },
  likes: {
    type: [String],
    default: []
  },
  comments: [commentSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

blogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
