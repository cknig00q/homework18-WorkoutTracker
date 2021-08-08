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

router.put('/api/workouts/:id', async (req, res) => {
    console.log('/api/workouts/:id, trying to get id')
    const id = req.params.id;
    console.log(`/api/workouts/${id}`);
    
    let workout;
    try {
        workout = await Workout.findById(id).exec();
    } catch(err) {
        res.status(400).json(err);
        return;
    }

    console.log('workout before update');
    console.log(workout);

    workout.exercise.push(req.body);

    console.log('workout after update');
    console.log(workout);

    Workout.updateOne({_id: id}, workout)
        .then(workoutObject => {
            console.log('updated');
            console.log(workoutObject);
            res.json(workoutObject)
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.get('/api/workouts', async (req,res) => {
    await Workout.find({})
    .then((workoutObject) => {
        res.json(workoutObject);
    })
    .catch((err) => {
        res.json(err);
    });
})

module.exports = router;