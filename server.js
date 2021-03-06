const express = require("express");
const path = require("path");
var compression = require('compression');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require("./routes/api-routes.js")(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// db.sequelize.sync().then(function() {
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
// });
