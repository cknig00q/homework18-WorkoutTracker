const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercise: [{
        name: {
            type: String,
        },
        type: {
            type: String,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
    }],
    day: {
        type: Date,
        default: Date.now,
    },
});

const Workout = mongoose.model('workout', WorkoutSchema);
module.exports = Workout;