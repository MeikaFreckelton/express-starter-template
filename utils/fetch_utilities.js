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


const getAllComments = function (req) {
    return Comment.find()
}

const getCommentsbySearch = function (req) {
    
}

module.exports = {
    fetchData,
    getAllComments,
    getCommentsbySearch
}