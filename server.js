const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connext(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
    useNerUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

require('./Develop/public/api')(app);

