const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRouter = require('./routes/posts_routes');
const {fetchData} = require('./utils/fetch_utilities.js')
const commentRouter = require('./routes/comment_routes')

const port = process.env.port || 3009;

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: false}))

app.use(express.json())

// parses the data from post requests (req.body)
// app.use(bodyParser.json());

const dbConn = 'mongodb://localhost/comments_app'
// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });

app.get('/', (req, res) => {
    console.log("get on /");
    res.send("got your request");
})

app.use('/posts', postRouter);
app.use('/comments', commentRouter)

// call fetch api from utils
fetchData();

app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});