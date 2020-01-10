//dependencies
var express = require("express");
var path = require("path");

//setup express app
var app = express();
var PORT = 3000;

//setup express
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//data
var tables = {
    Name: "Ahmed",
    Email: "ahmed@example.com",
    Phone: "000-000-0000",
  };

//route
app.get("/", function(req, res) {
    res.send("Welcome to Hot Restaurant booking page!!!");
  });

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
//   });

// app.get("/all", function(req, res) {
//     res.sendFile(path.join(__dirname, "all.html"));
// });

// Displays all table
app.get("/api/table", function(req, res) {
    return res.json(table);
  });

// app.get("/api/table", function(req, res) {
//     var chosen = req.params.table;
  
//     console.log(chosen);
  
//     for (var i = 0; i < table.length; i++) {
//       if (chosen === table[i].routeName) {
//         return res.json(table[i]);
//       }
//     }
  
//     return res.json(false);
//   });



//listening server
app.listen(PORT, function() {
    console.log("Hot Restaurant is listening on port" + PORT);
});