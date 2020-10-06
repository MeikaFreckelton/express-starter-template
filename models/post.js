const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Post schema
const Post = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title is too short"]
    },
    create_date: {
        type: Date,
        required: true
    },
    modified_date: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Username is too short"]
    },
    content: {
        type: String,
        required: [true, "content is required"],
        minlength: [3, "Blog post is too short"],
        maxlength: [1500, "blog post is too long"]
    },
    category: String
});

module.exports = mongoose.model('Post', Post);