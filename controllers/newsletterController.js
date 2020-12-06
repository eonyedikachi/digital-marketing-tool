const newsletter = (app) => {
  const connection = require("../models/db"); // database module

  // subscribe to newsletter
  app.post("/newsletter", (req, res) => {
    if (!req.body.email)
      return res.status(400).send("Please enter a valid email address");

    // INSERT into database
    connection.query(
      `insert into newsletter values('','${req.body.email}')`,
      (err, resp) => {
        if (err) return res.status(400).send(err);
        res.send("You have subscribed to MartReach newsletter successfully");
      }
    );
  });
};

module.exports = newsletter;
