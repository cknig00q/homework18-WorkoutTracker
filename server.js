const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
    useNerUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use(require('./routes/routes'));
app.use(require('./routes/workoutRoutes'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}. . .`);
});

