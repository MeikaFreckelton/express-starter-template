const express = require('express');
const router = express.Router();
const {
    writeData,
    getComments,
    getCommentsByLetter
} = require('../controllers/comments_controller');

router.get('/', getComments)

router.get('/:startingLetter', getCommentsByLetter)

// router.get('/:startingLetter', function (req, res) {
//     res.send(req.params.startingLetter)
// })

module.exports = router