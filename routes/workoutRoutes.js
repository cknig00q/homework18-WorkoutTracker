const Workout = require('../models/workoutDB');

const router = require('express').Router();

router.post('/api/workouts', async (req, res) => {
    console.log('calling /api/workouts with request');
    console.log(req);
    Workout.create({})
        .then(workoutObject => {
            console.log('mongoDB object created:');
            console.log(workoutObject);
            res.json(workoutObject)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;