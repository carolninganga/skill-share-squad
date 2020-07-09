const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));


//Define Routes

