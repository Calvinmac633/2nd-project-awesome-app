// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the tasks
  app.get("/api/tasks", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Task.findAll({}).then(function(dbTask) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTask);
    });

  });

  // Get route for retrieving a single task
  app.get("/api/tasks/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Task.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Calendar]
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // POST route for saving a new task
  app.post("/api/tasks", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Task.create({
      title: req.body.title,
      time: req.body.time,
      taskDescription: req.body.taskDescription,
      dateId: req.body.dateId
    }).then(function(dbTask) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTask);
    });

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/tasks/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbTask) {
        res.json(dbTask);
      });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/tasks", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the todos we want to update
    db.Task.update({
      title: req.body.title,
      time: req.body.time,
      taskDescription: req.body.taskDescription,
      dateId: req.body.dateId
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbTask) {
        res.json(dbTask);
      });

  });
};
