var audienceController = (app) => {
  const connection = require("../models/db");
    
   
   // Get audience API
    app.get("/audience", (req, res) => {
     connection.query(`select * from audience`, (err, resp) => {
        if (err) throw err;
        res.send(resp);
      });
    });
  
    app.get("/audience/:id", (req, res) => {
      connection.query(
        `select * from audience where id = ${req.params.id}`,
        (err, resp) => {
          if (err || resp.length < 1)
            return res.status(404).send("Record does not exist.");
        res.send(resp[0]);
        }
      );
    });
  
    // Delete an audience API
    app.delete("/audience/:id", (req, res) => {
      connection.query(
        `delete from audience where id = ${req.params.id}`,
        (err, resp) => {
          if (err) return res.send(err);
          res.send("audience successfully deleted at ID " + req.params.id);
        }
      );
    });
  
    // REST API to Insert audience
    app.post("/audience", (req, res) => {
      if (!req.body.user_id || !req.body.subscriberGroup || !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.tel || !req.body.country || !req.body.state || !req.body.city || !req.body.birthday)
      return res.status(400).send("Please fill all required fields");
  
        // INSERT into database
        connection.query(
          `insert into audience (user_id,subscriberGroup,firstName,lastName,tel,email,country,state,city,birthday) values 
              ('${req.body.user_id}',
              '${req.body.subscriberGroup}',
              '${req.body.firstName}',
              '${req.body.lastName}',
              '${req.body.tel}',
              '${req.body.email}',
              '${req.body.country}',
              '${req.body.state}',
              '${req.body.city}',
              '${req.body.birthday}')`,
          (error, resp) => {
            if (error) return res.send(error.sqlMessage);
            res.send("audience successfully created.");
            res.end();
          }
        );
      
    });
  
    //rest api to update record into mysql database
    app.put("/audience/:id", (req, res) => {
      connection.query(
        `update audience set firstName = '${req.body.firstName}', lastName = '${req.body.lastName}', tel='${req.body.tel}' where id=${req.params.id}`,
        (err, response) => {
          if (err) throw err;
          res.send("audience edited Successfully");
        }
      );
    });
  
   
  
    
  };
  
  module.exports = audienceController;
  