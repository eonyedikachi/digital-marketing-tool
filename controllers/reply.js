const reply = (app) => {
  const connection = require('../models/db'); // database module

    // Get Reply
    app.get("/reply",  (req, res) => {
      connection.query(`select * from reply_user`, (err, resp) => {
        if (err) throw err;
        res.send(resp);
      });
    });
  
  // Post Reply
  app.post('/reply/:id', (req, res) => {
    if (
      !req.params.id ||
      !req.body.userId ||
      !req.body.suggestionId ||
      !req.body.message
    )
      return res.status(400).send('Please fill all required fields');

    // INSERT into database
    connection.query(
      `insert into reply_user (userId,suggestionId,message) values('${req.body.userId}','${req.body.suggestionId}','${req.body.message}')`,
      (err, resp) => {
        if (err) return res.status(400).send(err);
        res.send(resp[0].message);
      }
    );
  });
};

module.exports = reply;
