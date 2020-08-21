const Workouts = require("../Develop/models/schema.js")

module.exports = function(app) {
    app.get("/api/workouts/range", (req, res) => {
        Workouts.find({}).sort({day: "desc"}).limit(7)
        .then(data => {
            res.json(data);
          })
        .catch(err => {
        res.json(err);
        });
    })

    //create workout post
  app.post("/api/workouts", ({ body }, res) => {
    Workouts.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //add workout put
  app.put("/api/workouts/:id", (req, res) => {
    Workouts.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //retrieve workouts? get
  app.get("/api/workouts", (req, res) => {
    //  grabbing it from database
    //  populate properties array
    Workouts.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
}