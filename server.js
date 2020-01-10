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
// app.get("/", function(req, res) {
//     res.send("Welcome to Hot Restaurant booking page!!!");
//   });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "all.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/tables/new", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all table
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

app.get("/api/table", function(req, res) {
    var chosen = req.params.tables;
  
    console.log(chosen);
  
    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });

app.post("/api/tables/new", function(req, res) {

  var newRes = req.body;

  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes);

  tables.push(newRes);

  res.json(newRes);
});



//listening server
app.listen(PORT, function() {
    console.log("Hot Restaurant is listening on port" + PORT);
});