const suggestions = (app) => {
  const connection = require("../models/db"); // database module
  
   // Suggestion
   app.post("/suggestions", (req, res) => {
    if (!req.body.userId || !req.body.category || !req.body.message)
      return res.status(400).send("Please fill all required fields");

    // INSERT into database
    connection.query(
      `insert into suggestions (userId,category,message) values('${req.body.userId}','${req.body.category}','${req.body.message}')`,
      (err, resp) => {
        if (err) return res.status(400).send(err);
        res.send("Suggestion received successfully.");
      }
    );
  });
};

module.exports = suggestions;

