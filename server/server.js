"use strict";

var loopback = require("loopback");
var boot = require("loopback-boot");
var bodyParser = require("body-parser");
var app = (module.exports = loopback());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit("started");
    var baseUrl = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", baseUrl);
    if (app.get("loopback-component-explorer")) {
      var explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
  });
};

app.use(bodyParser.json());

//Reset Password route to get an email to rest the password for candidates
app.post("/candidates/request-password-reset", function(req, res, next) {
  var Candidate = app.models.Candidate;
  console.log("request reset password for email : ", req);
  Candidate.resetPassword(
    {
      email: req.body.email
    },
    function(err) {
      if (err) return res.status(401).send("This email doesn't exist!");
      return res.status(200).send("Email has Been Sent Successfully");
    }
  );
});
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});
