const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPost,
  makePost,
  removePost,
  changePost,
  getComments
} = require('../controllers/posts_controller');

// READ
// GET on '/posts'
// Returns all posts
router.get('/', getPosts);

// READ
// GET on '/posts/:id'
// Returns post with given id
router.get('/:id', getPost);

// CREATE
// POST on '/posts'
// Creates a new post
router.post('/', makePost);

// DELETE
// DELETE on '/posts/:id'
// Deletes a post with id
router.delete('/:id', removePost);

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id
router.put('/:id', changePost);

// Accepts a param
// Displays records that include emails that begin with a specific letter
// router.get("/comments/:startingLetter", getComments)
// router.get('/comments', function (req, res){
//   res.send("hello")
// })


module.exports = router;

// get params from route
// search through comments.body to find body that begins with the specific letter given in params