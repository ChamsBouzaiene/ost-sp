"use strict";

module.exports = function(Assesment) {
  Assesment.applied = function(email, cb) {
    //Create a new remote methode that except user Email
    //@ this methode is used to send email
    cb(null, "Your submission is confirmed" + email);
  };

  Assesment.afterRemote("applied", function(ctx, instance, next) {
    var html = "<h2>Your submition is confirmed wait for our email </h2>";
    Assesment.app.models.Email.send(
      {
        to: ctx.args.email,
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
        console.log("> sending password reset email to:", ctx.args.email);
      }
    );
    next();
  });
  //Handle the apply remote methode
  Assesment.remoteMethod("applied", {
    accepts: { arg: "email", type: "string" },
    returns: { arg: "message", type: "string" }
  });
};
