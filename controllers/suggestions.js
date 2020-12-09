const suggestions = (app) => {
  const connection = require("../models/db"); // database module
  
   // Get Suggestion
  app.get("/suggestions",  (req, res) => {
    connection.query(`select * from suggestions`, (err, resp) => {
      if (err) throw err;
      res.send(resp);
    });
  });
  
  //Post Suggestions
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

