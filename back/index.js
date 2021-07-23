require('dotenv').config();

const express = require('express');
const app = express();
// const cors = require('cors');
const apiRouter = require('./app/router');
const port = process.env.PORT || 5555;

// use cors to accept or not entries
// app.use(cors());

// use json file
app.use(express.json());

// config render ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

// use my router
app.use(apiRouter);

// server listenning
app.listen(port,() => console.log(`Server is running on http://localhost:${port}`));
    