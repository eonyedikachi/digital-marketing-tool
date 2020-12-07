var userController = (app) => {
  require("dotenv").config();
  const connection = require("../models/db");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  const auth = require("./authController");

  app.get("/users", auth.authenticate, auth.viewUser, (req, res) => {
    // Get users
    connection.query(`select * from users`, (err, resp) => {
      if (err) throw err;
      resp.map((x) => delete x.password);
      res.send(resp);
    });
  });

  app.get("/users/:id", auth.authenticate, auth.viewUser, (req, res) => {
    connection.query(
      `select * from users where id = ${req.params.id}`,
      (err, resp) => {
        if (err || resp.length < 1)
          return res.status(404).send("Record does not exist.");
        delete resp[0].password;
        res.send(resp[0]);
      }
    );
  });

  // Delete a user
  app.delete("/users/:id", auth.authenticate, auth.deleteUser, (req, res) => {
    connection.query(
      `delete from users where id = ${req.params.id}`,
      (err, resp) => {
        if (err) return res.send(err);
        res.send("User successfully deleted at ID " + req.params.id);
      }
    );
  });

  // REST API to Insert users
  app.post("/users", auth.authenticate, auth.addUser, (req, res) => {
    // Hash password
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) return res.send(err);

      if (!req.body.website) req.body.website = null;
      if (!req.body.picture) req.body.picture = null;

      // INSERT into database
      connection.query(
        `insert into users (firstName,lastName,username,tel,email,password,website,picture,isEnabled) values 
            ('${req.body.firstName}',
            '${req.body.lastName}',
            '${req.body.username}',
            '${req.body.tel}',
            '${req.body.email}',
            '${hash}',
            '${req.body.website}',
            '${req.body.picture}',
            'true')`,
        (error, resp) => {
          if (error) return res.send(error.sqlMessage);
          res.send("User successfully created.");
          res.end();
        }
      );
    });
  });

  //rest api to update record into mysql database
  app.put("/users/:id", auth.authenticate, auth.editUser, (req, res) => {
    connection.query(
      `update users set firstName = '${req.body.firstName}', lastName = '${req.body.lastName}', username='${req.body.username}' where id=${req.params.id}`,
      (err, response) => {
        if (err) throw err;
        res.send("User edited Successfully");
      }
    );
  });

  // POST request (Signup)
  app.post("/signup", (req, res) => {
    // Hash password
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) return res.send(err);

      if (!req.body.website) req.body.website = null;
      if (!req.body.picture) req.body.picture = null;

      // INSERT into database
      connection.query(
        `insert into users (firstName,lastName,username,tel,email,password,website,picture,isEnabled) values 
            
          ('${req.body.firstName}',
            '${req.body.lastName}',
            '${req.body.username}',
            '${req.body.tel}',
            '${req.body.email}',
            '${hash}',
            '${req.body.website}',
            '${req.body.picture}',
            'true')`,
        (error, resp) => {
          if (error) return res.send(error.sqlMessage);
          res.send("User successfully created.");
          res.end();
        }
      );
    });
  });

  // Login API
  app.post("/login", (req, res) => {
    connection.query(
      `SELECT * FROM users inner join user_role on users.id = user_role.userId WHERE username='${req.body.username}'`,
      (err, resp) => {
        if (err || resp.length < 1) {
          res.statusCode = 401;
          res.send("Invalid username and password");
        } else {
          bcrypt.compare(req.body.password, resp[0].password, (err, result) => {
            if (result === false) {
              res.statusCode = 401;
              res.send("Invalid username and password");
            }
            if (result === true) {
              // Check permissions
              connection.query(
                `select permissionName from permission inner join role_permission on permission.permissionId = role_permission.permissionId where role_permission.roleId = ${resp[0].roleId}`,
                (err, resPerm) => {
                  if (err) return res.status(401).send(err);
                  resp[0].permissions = resPerm;

                  // Token logic
                  let data = { data: resp[0] };
                  let token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: process.env.ACCESS_TOKEN_LIFE,
                  });
                  let tokenData = {
                    data: resp[0],
                    accessToken: token,
                  };
                  res.send(tokenData);
                }
              );
            }
          });
        }
      }
    );
  });
};

module.exports = userController;
