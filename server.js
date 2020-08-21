// const express = require("express");
// const mongojs = require("mongojs");
// const logger = require("morgan");

// const app = express();



// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// const databaseUrl = "notetaker";
// const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// // Routes
// require("./routes/apiroutes.js")(app);
// require("./routes/htmlroutes.js")(app);
// // app.use(require("./routes/apiroutes.js"))
// // app.use(require("./routes/htmlroutes.js"))

// // Listen on port 3000
// app.listen(3000, () => {
//   console.log("App running on port 3000!");
// });

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./Develop/models/schema.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

