const express = require( 'express' )
const fetch = require("node-fetch")
const fs = require('fs')
const Comment = require('../models/comment')
// const 


const fetchData = async () => {
    try{
        const dataUrl = 'https://jsonplaceholder.typicode.com/comments'
        const response = await fetch(dataUrl)
        const data = await response.json()
        let json = JSON.stringify( data, null, 2 );
        
        // fs.writeFile('comment.js', json, 'utf8', (err) =>{
        //     if (err) throw err;
        //     console.log('Data Written to file')
        // });
        // const newComment = new Comment()
        // newComment.save(function (err) {
        //     if (err) return handleError(err)
        // })
        // console.log(json)
        // logic to filter the api data to suit the comment section :
        const polishedData = data.map(el => {
            let newObj = {
                postId: el.postId,
                id: el.id,
                user: {
                    name: el.name,
                    email: el.email
                },
                body: el.body 
            }
            // console.log(newObj.user)
            return newObj
            
        })



        Comment.insertMany(polishedData, (err, data) => {
            if (err) throw err
            else console.log("successful entry", data)
        })


    } catch(err) {
        console.log(err)
    }
}

//  get all comments
const getAllComments = function (req) {
    return Comment.find()
}

// return comments based on the first letter of the body of the comment - by the params given
const getCommentsBySearch = function (req) {
    const letter = req.params.startingLetter.charAt(0)
    return Comment.find({body: {$regex: '^' + letter, $options: 'i'}})
}

module.exports = {
    fetchData,
    getAllComments,
    getCommentsBySearch
}