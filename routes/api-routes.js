var db = require("../models");
// Routes =============================================================
module.exports = function(app) {
  app.get("/api/task/:date", function(req, res) {
    db.tasks
      .findAll({
        where: {
          date: req.params.date
        }
      })
      .then(function(dbTask) {
        res.json(dbTask);
      });
  });
};
