var roleController = (app) => {
  const connection = require("../models/db");
  const auth = require("./authController");

  // Get role API
  app.get("/role", auth.authenticate, auth.manageRole, (req, res) => {
    connection.query(`select * from role`, (err, resp) => {
      if (err) throw err;
      res.send(resp);
    });
  });

  app.get("/role/:id", auth.authenticate, auth.manageRole, (req, res) => {
    connection.query(
      `select * from role where id = ${req.params.id}`,
      (err, resp) => {
        if (err || resp.length < 1)
          return res.status(404).send("Record does not exist.");
        res.send(resp[0]);
      }
    );
  });

  // Delete an role API
  app.delete("/role/:id", auth.authenticate, auth.manageRole, (req, res) => {
    connection.query(
      `delete from role where id = ${req.params.id}`,
      (err, resp) => {
        if (err) return res.send(err);
        res.send("role successfully deleted at ID " + req.params.id);
      }
    );
  });

  // REST API to Insert role
  app.post("/role", auth.authenticate, auth.manageRole, (req, res) => {
    if (!req.body.roleName || !req.body.roleDescription)
      return res.status(400).send("Please fill all required fields");

    // INSERT into database
    connection.query(
      `insert into role (roleName,roleDescription) values 
              ('${req.body.roleName}',
              '${req.body.roleDescription}')`,
      (error, resp) => {
        if (error) return res.send(error.sqlMessage);
        res.send("role successfully created.");
        res.end();
      }
    );
  });

  //rest api to update role into mysql database
  app.put("/role/:id", auth.authenticate, auth.manageRole, (req, res) => {
    connection.query(
      `update role set roleName = '${req.body.roleName}', roleDescription = '${req.body.roleDescription}' where id=${req.params.id}`,
      (err, response) => {
        if (err) throw err;
        res.send("role edited Successfully");
      }
    );
  });
};

module.exports = roleController;
