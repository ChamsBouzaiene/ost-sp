"use strict";

var path = require("path");

module.exports = function(Candidate) {
  //Validate Uninqueness of CIN
  Candidate.validatesUniquenessOf("cin", {
    message: "CIN already Exist"
  });

  //Validate Uninqueness of Email
  Candidate.validatesUniquenessOf("email", {
    message: "Email already Exist"
  });

  //Send Email after Candidate Registion
  Candidate.afterRemote("create", function(context, userInstance, next) {
    console.log("A So3louk has been created");
    console.log(userInstance);

    var options = {
      type: "email",
      to: userInstance.email,
      from: "ost.com.tn@gmail.com",
      subject: "Confirm Registration on OST platform",
      template: path.resolve(__dirname, "./verify.ejs"),
      user: userInstance
    };

    userInstance.verify(options, function(err, response, next) {
      if (err) return next(err);

      console.log("verification mail has been sent :", response);
    });
    next();
  });

  //Rest react path
  const RestPassword = "localhost:3001/auth/reset";

  // Reset Password Methode
  Candidate.on("resetPasswordRequest", function(info) {
    var url = "http://" + RestPassword;
    var html =
      'Click <a href="' +
      url +
      "?access_token=" +
      info.accessToken.id +
      '">here</a> to reset your password';
    console.log("requesting password");
    Candidate.app.models.Email.send(
      {
        to: info.email,
        from: "ost.com.tn@gmail.com",
        subject: "Password reset",
        html: html
      },
      function(err) {
        if (err) return console.log("> error sending password reset email");
        console.log("> sending password reset email to:", info.email);
      }
    );
  });
};
