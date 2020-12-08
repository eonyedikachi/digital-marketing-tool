var permissionController = (app) => {
  const connection = require("../models/db");
  const auth = require("./authController");

  // Get permission API
  app.get(
    "/permission",
    auth.authenticate,
    auth.managePermission,
    (req, res) => {
      connection.query(`select * from permission`, (err, resp) => {
        if (err) throw err;
        res.send(resp);
      });
    }
  );

  app.get(
    "/permission/:id",
    auth.authenticate,
    auth.managePermission,
    (req, res) => {
      connection.query(
        `select * from permission where id = ${req.params.id}`,
        (err, resp) => {
          if (err || resp.length < 1)
            return res.status(404).send("Record does not exist.");
          res.send(resp[0]);
        }
      );
    }
  );

  // Delete an permission API
  app.delete(
    "/permission/:id",
    auth.authenticate,
    auth.managePermission,
    (req, res) => {
      connection.query(
        `delete from permission where id = ${req.params.id}`,
        (err, resp) => {
          if (err) return res.send(err);
          res.send("permission successfully deleted at ID " + req.params.id);
        }
      );
    }
  );

  // REST API to Insert permission
  app.post(
    "/permission",
    auth.authenticate,
    auth.managePermission,
    (req, res) => {
      if (
        !req.body.permissionName ||
        !req.body.permissionDescription ||
        !req.body.groupName
      )
        return res.status(400).send("Please fill all required fields");
    }
  );

  //rest api to update permission into mysql database
  app.put(
    "/permission/:id",
    auth.authenticate,
    auth.managePermission,
    (req, res) => {
      connection.query(
        `update permission set permissionName = '${req.body.permissionName}', permissionDescription = '${req.body.permissionDescription}',groupName = '${req.body.groupName}' where id=${req.params.id}`,
        (err, response) => {
          if (err) throw err;
          res.send("permission edited Successfully");
        }
      );
    }
  );
};

module.exports = permissionController;
