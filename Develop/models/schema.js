const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:[
      {
        type: {
            type: String,
            trim: true,
            required: "Exercise type is Required"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name is Required"
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
      }
  ]
});

// This creates our model from the above schema, using mongoose's model method
const Workouts = mongoose.model("Workouts", Workout);

// Export the User model
module.exports = Workouts;
