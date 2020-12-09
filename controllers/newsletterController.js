const newsletter = (app) => {
  const connection = require("../models/db"); // database module
  const auth = require("./authController");
  const Joi = require("joi");

  // subscribe to newsletter
  app.post("/newsletter", (req, res) => {
    const { error } = validateTemplate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // INSERT into database
    connection.query(
      `insert into newsletter values('','${req.body.email}')`,
      (err, resp) => {
        if (err) return res.status(400).send(err);
        res.send("You have subscribed to MartReach newsletter successfully");
      }
    );
  });

  // GET
  app.get("/newsletter", auth.authenticate, (req, res) => {
    connection.query(`select * from newsletter`, (err, resp) => {
      if (err) throw err;
      res.send(resp);
    });
  });

  // Get by id
  app.get("/newsletter/:id", auth.authenticate, (req, res) => {
    connection.query(
      `select * from newsletter where id = ${req.params.id}`,
      (err, resp) => {
        if (err || resp.length < 1)
          return res.status(404).send("Record does not exist.");
        res.send(resp[0]);
      }
    );
  });

  // DELETE
  app.delete("/newsletter/:id", auth.authenticate, (req, res) => {
    connection.query(
      `delete from newsletter where id = ${req.params.id}`,
      (err, resp) => {
        if (resp.affectedRows === 0)
          return res.status(404).send("Record does not exist.");
        if (err) return res.send(err);
        res.send("Email successfully deleted from newsletter list.");
      }
    );
  });

  function validateTemplate(template) {
    const schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
    });

    return schema.validate(template);
  }
};

module.exports = newsletter;
