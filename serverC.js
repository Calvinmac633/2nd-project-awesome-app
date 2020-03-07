// // Dependencies

// const express = require("express");
// const path = require("path");
// const app = express();
// const fs = require("fs");

// const PORT = process.env.PORT || 3000;
// // set up the express app to handle data parsing
// app.use(express.static(__dirname + "/public"));
// app.use(express.urlencoded({ extend: true }));
// app.use(express.json());

// let noteID = 0;

// // Functions

// //Write JSON to db file
// const writeToDB = data => {
//   fs.writeFile(__dirname + "/db/db.json", JSON.stringify(data), err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });
// };
// // Routes

// // general route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });
// //notes route
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });
// //API route for JSON of database
// app.get("/api/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./db/db.json"));
// });

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// //POST to db
// app.post("/api/notes", (req, res) => {
//   const newNote = req.body;
//   const db = fs.readFile(__dirname + "/db/db.json", (err, data) => {
//     const notes = JSON.parse(data);
//     console.log("ID before", noteID);
//     newNote.id = noteID;
//     noteID++;
//     console.log("ID after", noteID);
//     notes.push(newNote);
//     res.json(notes);
//     console.log("new notes db is", notes);
//     writeToDB(notes);
//   });
// });

// //Delete from db based off of ID
// app.delete("/api/notes/:id", (req, res) => {
//   const idNum = parseInt(req.params.id);

//   const db = fs.readFile(__dirname + "/db/db.json", (err, data) => {
//     const notes = JSON.parse(data);
//     const result = notes.filter(note => note.id !== idNum);
//     res.json(result);
//     writeToDB(result);
//   });
// });

// // Listener
// // ===========================================================
// app.listen(PORT, () => {
//   console.log("App listening on PORT " + PORT);
// });
