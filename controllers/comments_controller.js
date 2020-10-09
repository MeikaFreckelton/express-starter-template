const {
    fetchData,
    getCommentsBySearch,
    getAllComments
} = require('../utils/fetch_utilities.js')



const writeData = function (req, res) {

    fetchData(req).save((err, comment) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.status(201);
        res.send(comment);
    });
};


const getComments = function(req, res) {
    getAllComments(req).exec((err, comment) => {
        if (err) {
            res.status(500)
            return res.json({
                error: err.message
            })
        }
        // console.log(comment)
        // res.status(200)
        res.send(comment)
    })
}

const getCommentsByLetter = function(req,res) {
    getCommentsBySearch(req).exec((err, comment) => {
        if (err) {
            res.status(500)
            return res.json({
                error: err.message
            })
        }
        res.send(comment)
    })
}

module.exports = {
    writeData,
    getComments,
    getCommentsByLetter
}