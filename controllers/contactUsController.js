const contactUs = (app) => {
  const connection = require("../models/db"); // database module
  const auth = require("./authController");
  const Joi = require("joi");

  //POST
  app.post("/contactUs", (req, res) => {
    const { error } = validateTemplate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (!req.body.tel) req.body.tel = "";
    if (!req.body.message) req.body.message = "";

    // INSERT into database
    connection.query(
      `insert into contact_us values('','${req.body.name}','${req.body.email}','${req.body.tel}','${req.body.message}')`,
      (err, resp) => {
        if (err) return res.status(400).send(err);
        res.send(
          "Thank you for contacting us, we will get back to you as soon as possible."
        );
      }
    );
  });

  // GET
  app.get("/contactUs", auth.authenticate, (req, res) => {
    connection.query(`select * from contact_us`, (err, resp) => {
      if (err) throw err;
      res.send(resp);
    });
  });

  // Get by id
  app.get("/contactUs/:id", auth.authenticate, (req, res) => {
    connection.query(
      `select * from contact_us where id = ${req.params.id}`,
      (err, resp) => {
        if (err || resp.length < 1)
          return res.status(404).send("Record does not exist.");
        res.send(resp[0]);
      }
    );
  });

  // DELETE
  app.delete("/contactUs/:id", auth.authenticate, (req, res) => {
    connection.query(
      `delete from contact_us where id = ${req.params.id}`,
      (err, resp) => {
        if (resp.affectedRows === 0)
          return res.status(404).send("Record does not exist.");
        if (err) return res.send(err);
        res.send("Record successfully deleted.");
      }
    );
  });

  function validateTemplate(template) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      tel: Joi.string().empty("").min(11).max(16),
      message: Joi.string().min(5).required(),
    });

    return schema.validate(template);
  }
};

module.exports = contactUs;
