const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Comment = new Schema ({
    user: {
        name: {
            type: String
        },
        email: {
            type: String
        }
    },
    // name: {
    //     type: String
    // },
    // email: {
    //     type: String
    // },
    body: {
        type: String
    },
    postId: {
        type: Number
    },
    id: {
        type: Number
    }
})

module.exports = mongoose.model('Comment', Comment)