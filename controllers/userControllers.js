var userController = (app) => {
    const connection = require("../models/db");
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");
    require("dotenv").config();
  
  
    process.env.ACCESS_TOKEN_SECRET
    
  
    app.get("/users", verifyToken, (req, res) => {
      console.log('Token is ',req.token);
   jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          console.log(err);
          res.sendStatus(403);
        } else {
          // Get users
          connection.query(`select * from users`, (err, resp) => {
            if (err) throw err;
            resp.map((x) => delete x.password);
            res.send(resp);
          });
        }
      });
    });
  
  
    app.get("/users/:id", (req, res) => {
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
    app.delete("/users/:id", (req, res) => {
      connection.query(
        "DELETE FROM users  WHERE id = ?",
        [req.params.id],
        (err) => {
          if (!err) res.send("Deleted successfully!");
          else console.log(err);
        }
      );
    });
  
    // REST API to Insert users
    app.post("/users", (req, res) => {
      // Hash password
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        console.log(hash)
        if (err) return res.send(err);
  
        // INSERT into database
        connection.query(
          `insert into users (firstName,lastName,username,tel,email,password,website,picture,isEnable) values 
            ('${req.body.firstName}',
            '${req.body.lastName}',
            '${req.body.username}',
            '${req.body.tel}',
            '${req.body.email}',
            '${req.body.website}',
            '${req.body.picture}',
            '${req.body.isEnable}','${hash}')`,
          (error, resp) => {
            if (error) return res.send(error.sqlMessage);
            res.send("User successfully created.");
            res.end();
          }
        );
      });
    });
  
    //rest api to update record into mysql database
    app.put("/users/:id", (req, res) => {
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
        console.log(hash)
        if (err) return res.send(err);
  
        // INSERT into database
        connection.query(
          `insert into users (firstName,lastName,username,tel,email,password,website,picture,isEnable) values 
            ('${req.body.firstName}',
            '${req.body.lastName}',
            '${req.body.username}',
            '${req.body.tel}',
            '${req.body.email}',
            '${req.body.website}',
            '${req.body.picture}',
            '${req.body.isEnable}','${hash}')`,
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
        `SELECT * FROM users WHERE username='${req.body.username}'`,
        (err, resp) => {
         
          if (err || resp.length < 1) {
            res.statusCode = 401;
            res.send("Invalid username and password");
          } else {
            bcrypt.compare(
              req.body.password,
              resp[0].password,
              function (err, result) {
                console.log(result)
                if (result === false) {
                  res.statusCode = 401;
                  res.send("Invalid username and password");
                  
                }
                if (result === true) {
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
              }
            );
          }
        }
      );
    });
  
    // Verify Token
    function verifyToken (req, res, next){
      // Get auth header value
      const authHeader = req.headers["authorization"];
      // Check if bearer is undefined
      console.log(authHeader)
      if (typeof authHeader !== "undefined") {
        // console.log(authHeader)
        // Set token
        req.token = authHeader;
        console.log(authHeader)
        // Next middleware
        next();
      } else {
        // Forbidden
        res.sendStatus(403);
      }
    };
  };
  
  module.exports = userController;
  