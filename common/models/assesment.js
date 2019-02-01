"use strict";

var path = require("path");
var html = require("./submitedEmail");
module.exports = function(Assesment) {
  Assesment.applied = function(id, cb) {
    //Create a new remote methode that except user Email
    //@ this methode is used to send email
    cb(null, "Your submission is confirmed " + id);
  };

  Assesment.afterRemote("applied", function(ctx, instance, next) {
    console.log("the args ", ctx.args);

    Assesment.app.models.Candidate.findById(ctx.args.id, function(
      err,
      candidate
    ) {
      if (!candidate) return new Error("Id not found");
      console.log("his user id is !!", candidate.id);
      console.log("his email is !!", candidate.email);
      Assesment.app.models.Email.send(
        {
          type: "email",
          to: candidate.email,
          from: "ost.com.tn@gmail.com",
          subject: "Your application has been submited",
          html: html
        },
        function(err) {
          if (err)
            return console.log(
              "> error sending password reset email",
              ctx.args.email
            );
          console.log("> sending password reset email to:", candidate.email);
        }
      );
      //return process.nextTick(() => cb(null, true));
    });
    next();
  });
  //Handle the apply remote methode
  Assesment.remoteMethod("applied", {
    accepts: { arg: "id", type: "number" },
    returns: { arg: "message", type: "string" }
  });
};
