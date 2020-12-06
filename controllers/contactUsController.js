const contactUs = (app) => {
  const connection = require("../models/db"); // database module

  // subscribe to contactUs
  app.post("/contactUs", (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.tel || !req.body.message)
      return res.status(400).send("Please input all required fields");

    // INSERT into database
    connection.query(
      `insert into contact_us values('','${req.body.name}','${req.body.email}','${req.body.tel}','${req.body.message}')`,
      (err, resp) => {
        if (err) return res.status(400).send(err);
        res.send("Message sent successfully.");
      }
    );
  });
};

module.exports = contactUs;
