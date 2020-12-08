const assignRole = (id) => {
  const connection = require("../models/db");
  connection.query(
    `insert into user_role (roleId,userId) values(2,${id})`,
    (err, resp) => {
      if (err) return new Error(err);
    }
  );
};
module.exports = assignRole;
