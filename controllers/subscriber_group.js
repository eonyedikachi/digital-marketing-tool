var subscriber_group = (app) => {
    const connection = require("../models/db");
      
     
     // Get subscriber_group API
      app.get("/subscriber_group", (req, res) => {
       connection.query(`select * from subscriber_group`, (err, resp) => {
          if (err) throw err;
          res.send(resp);
        });
      });
    
      app.get("/subscriber_group/:id", (req, res) => {
        connection.query(
          `select * from subscriber_group where id = ${req.params.id}`,
          (err, resp) => {
            if (err || resp.length < 1)
              return res.status(404).send("Record does not exist.");
          res.send(resp[0]);
          }
        );
      });
    
      // Delete an subscriber_group API
      app.delete("/subscriber_group/:id", (req, res) => {
        connection.query(
          `delete from subscriber_group where id = ${req.params.id}`,
          (err, resp) => {
            if (err) return res.send(err);
            res.send("subscriber_group successfully deleted at ID " + req.params.id);
          }
        );
      });
    
      // REST API to Insert subscriber_group
      app.post("/subscriber_group", (req, res) => {
        if (!req.body.id || !req.body.name || !req.body.user_id)
        return res.status(400).send("Please fill all required fields");
    
          // INSERT into database
          connection.query(
            `insert into subscriber_group (id,name,user_id) values 
                ('${req.body.id}',
                '${req.body.name}',
                '${req.body.user_id}')`,
            (error, resp) => {
              if (error) return res.send(error.sqlMessage);
              res.send("subscriber_group successfully created.");
              res.end();
            }
          );
        
      });
    
      //rest api to update record into mysql database
      app.put("/subscriber_group/:id", (req, res) => {
        connection.query(
          `update subscriber_group set user_id = '${req.body.user_id}', name = '${req.body.name}' where id=${req.params.id}`,
          (err, response) => {
            if (err) throw err;
            res.send("subscriber_group edited Successfully");
          }
        );
      });
    
     
    
      
    };
    
    module.exports = subscriber_group;
    