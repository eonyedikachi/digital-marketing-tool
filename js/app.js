const express = require("express"); // express module
const bodyParser = require("body-parser"); // body-parser middleware
const emailTemplate = require("../controllers/emailTemplateController"); // emailTemplateController module
const contactUs = require("../controllers/contactUsController"); // contactUsController module
const newsletter = require("../controllers/newsletterController"); // newsletterController module

// Dynamic port listener
const port = process.env.PORT || 3000; // set port
const app = express(); // express init
app.use(bodyParser.json()); // Middleware use with express

emailTemplate(app);
contactUs(app);
newsletter(app);

// Listen on port
app.listen(port, () => console.log(`Listening on port ${port}...`));
