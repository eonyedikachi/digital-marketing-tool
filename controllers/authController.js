require("dotenv").config(); // environment config file
const jwt = require("jsonwebtoken"); // jsonwebtoken

// Verify Token
const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Get auth header value
  const token = authHeader && authHeader.split(" ")[1]; // get token
  if (typeof token === "undefined") return res.sendStatus(403); // Check if token is undefined

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Access Denied!");
    req.user = decoded; //decoded token data
    next(); // Next middleware
  });
};

// Check User Management Permission
const manageUser = (req, res, next) => {
  if (checkPermission("user_management", req.user.data.permissions) === true) {
    next();
  } else {
    res.status(403).send("You don't have permission to manage users");
  }
};

// Check Role Management Permission
const manageRole = (req, res, next) => {
  if (checkPermission("role_management", req.user.data.permissions) === true) {
    next();
  } else {
    res.status(403).send("You don't have permission to manage roles");
  }
};

// Check Permission Management Permission
const managePermission = (req, res, next) => {
  if (
    checkPermission("permission_management", req.user.data.permissions) === true
  ) {
    next();
  } else {
    res.status(403).send("You don't have permission to manage permissions");
  }
};

// Find permission
const checkPermission = (action, data) => {
  permission = data.some((x) => x.groupName === action);
  return permission;
};

// Export modules
module.exports.authenticate = authenticate;
module.exports.manageUser = manageUser;
module.exports.manageRole = manageRole;
module.exports.managePermission = managePermission;
