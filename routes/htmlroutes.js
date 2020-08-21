var path = require("path");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
    })

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
    })
}
