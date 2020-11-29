const mysql = require("mysql"); // mysql module

// Create SQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "martreach",
});

// Test SQL connection
connection.connect((err, res) => {
  if (err) throw err;
  console.log("db server connected");
});

module.exports = connection;
