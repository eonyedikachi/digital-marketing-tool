const stickyNote = (app) => {
    const connection = require("../models/db"); // database module

    // Get sticky note details by id
  app.get('/sticky_note/:id', (req, res) => {
    connection.query(
      `select * from sticky_note where id = ${req.params.id}`,
      (err, resp) => {
        if (err || resp.length < 1)
          return res.status(404).send('Sticky note does not exist.');
        res.send(resp[0]);
      }
    );
  });
    
     // Create Sticky note
     app.post("/sticky_note", (req, res) => {
      if (!req.body.userId || !req.body.note)
        return res.status(400).send("Please fill all required fields");
  
      // INSERT into database
      connection.query(
          `insert into sticky_note (userId,note) 
        values('${req.body.userId}','${req.body.note}')`,
        (err, res) => {
          if (err) return res.status(400).send(err);
          res.send("Sticky note Saved Successfully.");
        }
      );
     });
    
    //Edit Billing Info
    app.put('/sticky_note/:id', (req, res) => {
        connection.query(
          `update sticky_note set note = '${req.body.note}' where id=${req.params.id}`,
          (err, response) => {
            if (err) throw err;
            response.send('Note Info Updated Successfully');
          }
        );
      });
  };
  
  
  module.exports = stickyNote;
  
  