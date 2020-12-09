const emailTemplate = (app) => {
  const connection = require("../models/db"); // database module
  const auth = require("./authController");
  const Joi = require("joi"); // validator

  // GET emailTemplates
  app.get("/emailTemplates", auth.authenticate, (req, res) => {
    connection.query(`select * from email_templates`, (err, resp) => {
      if (err) throw err;
      res.send(resp);
    });
  });

  // Get emailTemplates by id
  app.get("/emailTemplates/:id", auth.authenticate, (req, res) => {
    connection.query(
      `select * from email_templates where id = ${req.params.id}`,
      (err, resp) => {
        if (err || resp.length < 1)
          return res.status(404).send("Template does not exist.");
        res.send(resp[0]);
      }
    );
  });

  // Create new emailTemplate
  app.post("/emailTemplates", auth.authenticate, (req, res) => {
    const { error } = validateTemplate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // INSERT into database
    connection.query(
      `insert into email_templates (user_id,name,json,html) values('${req.body.user_id}','${req.body.name}','${req.body.json}','${req.body.html}')`,
      (err, resp) => {
        if (err) return res.status(400).send(err);
        res.send("Email Template created successfully.");
      }
    );
  });

  // Edit emailTemplates
  app.put("/emailTemplates/:id", auth.authenticate, (req, res) => {
    connection.query(
      `SELECT * FROM email_templates WHERE id=${req.params.id}`,
      (err, db_res) => {
        if (err) {
          res.send(err);
        } else if (db_res.length < 1) {
          res.status(404).send(`No record found at ID ${req.params.id}`);
        } else {
          let email_templates = db_res;
          let user_id = req.body.user_id;
          let name = req.body.name;
          let json = req.body.json;
          let html = req.body.html;
          let id = req.params.id;
          if (user_id == undefined) {
            user_id = email_templates[0].user_id;
          }
          if (name == undefined) {
            name = email_templates[0].name;
          }
          if (json == undefined) {
            json = email_templates[0].json;
          }
          if (html == undefined) {
            html = email_templates[0].html;
          }
          let sql = `update email_templates set user_id = '${user_id}', name = '${name}', json = '${json}', html = '${html}' where id = ${id}`;
          connection.query(sql, (err, db_res) => {
            if (err) return res.status(400).send(err);
            res.send(`Email Template Updated Successfully at ID: ${id}!`);
          });
        }
      }
    );
  });

  // DELETE emailTemplate
  app.delete("/emailTemplates/:id", auth.authenticate, (req, res) => {
    connection.query(
      `delete from email_templates where id = ${req.params.id}`,
      (err, resp) => {
        if (resp.affectedRows === 0)
          return res.status(404).send("Template does not exist.");
        if (err) return res.send(err);
        res.send("Email Template successfully deleted.");
      }
    );
  });

  function validateTemplate(template) {
    const schema = Joi.object({
      user_id: Joi.required(),
      name: Joi.string().min(3).required(),
      json: Joi.string().empty("").required(),
      html: Joi.string().empty("").required(),
    });

    return schema.validate(template);
  }
};

module.exports = emailTemplate;
