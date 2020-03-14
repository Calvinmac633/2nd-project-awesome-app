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
    db.Tasks.findAll({}).then(function() {
      // We have access to the todos as an argument inside of the callback function
      res.json();
    });
  });

  // GET route for getting Luxon
  app.get("/api/calendar", function(req, res) {
    const { DateTime } = require("luxon");
    const now = DateTime.local();
    //1)what's day of week of 1st of month?
    const firstOfMonthDayOfWeek = now.startOf("month").weekday;
    console.log("Frist of Month Day of Week", firstOfMonthDayOfWeek);
    //how many days in this month?
    const numberOfDaysInMonth = now.endOf("month").day;
    console.log("Number of Days in the month", numberOfDaysInMonth);

    const days = [];
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      // create a date time for this month and the i'th day
      const day = DateTime.local(2020, 3, i).toISODate();
      // push that to days array
      days.push(day);
    }

    // We have access to the todos as an argument inside of the callback function
    res.json({
      firstOfMonthDayOfWeek,
      numberOfDaysInMonth,
      days
    });
  });

  // Get route for retrieving a single task
  app.get("/api/tasks/:date", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Tasks.findAll({}).then(function(dbTasks) {
      console.log(dbTasks.Tasks);
      res.json(dbTasks);
    });
  });

  // POST route for saving a new task
  app.post("/api/tasks", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    console.log(req.body);
    db.Tasks.create({
      date: req.body.date,
      note: req.body.note
    }).then(function(dbTask) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTask);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/tasks/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.Tasks.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/tasks", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the todos we want to update
    db.Tasks.update(
      {
        date: req.body.date,
        note: req.body.note
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbTask) {
      res.json(dbTask);
    });
  });
};
