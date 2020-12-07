require("dotenv").config(); // environment config file
const jwt = require("jsonwebtoken"); // jsonwebtoken

// Verify Token
const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Get auth header value
  if (typeof authHeader === "undefined") return res.sendStatus(403); // Check if authHeader is undefined
  req.token = authHeader; // Set token
  jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Access Denied!");
    req.user = decoded; //decoded token data
    next(); // Next middleware
  });
};

// Check Permission to View User
const viewUser = (req, res, next) => {
  if (checkPermission("view_user", req.user.data.permissions) === true) {
    next();
  } else {
    res.status(403).send("You don't have permission to view all users");
  }
};

// Check Permission to Edit Users
const editUser = (req, res, next) => {
  if (checkPermission("edit_user", req.user.data.permissions) === true) {
    next();
  } else {
    res.status(403).send("You don't have permission to edit a user");
  }
};

// Check Permission to Add Users
const addUser = (req, res, next) => {
  if (checkPermission("add_user", req.user.data.permissions) === true) {
    next();
  } else {
    res.status(403).send("You don't have permission to add a user");
  }
};

// Check Permission to Delete Users
const deleteUser = (req, res, next) => {
  if (checkPermission("delete_user", req.user.data.permissions) === true) {
    next();
  } else {
    res.status(403).send("You don't have permission to delete a user");
  }
};

// Find permission
const checkPermission = (action, data) => {
  permission = data.some((x) => x.permissionName === action);
  return permission;
};

// Export modules
module.exports.authenticate = authenticate;
module.exports.viewUser = viewUser;
module.exports.editUser = editUser;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;
