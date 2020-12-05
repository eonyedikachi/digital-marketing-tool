const reply = (app) => {
    const connection = require("../models/db"); // database module
    
     // Suggestion
     app.post("/reply/:id", (req, res) => {
      if (!req.params.id || !req.body.userId || !req.body.suggestionId || !req.body.message)
        return res.status(400).send("Please fill all required fields");
  
      // INSERT into database
      connection.query(
        `insert into reply_user (userId,suggestionId,message) values('${req.body.userId}','${req.body.suggestionId}','${req.body.message}')`,
        (err, resp) => {
          if (err) return res.status(400).send(err);
          res.send(resp[0].message);
        }
      );
    });
  };
  
  
  module.exports = reply;
  
  