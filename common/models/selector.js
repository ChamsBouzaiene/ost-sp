"use strict";
var generator = require("generate-password");
var platfromLink = "http://localhost:3001/admin/";

module.exports = function(Selector) {
  //Validate Uninqueness of Email
  Selector.validatesUniquenessOf("email", {
    message: "Email already Exist"
  });
  //Create a new remote methode that except user Email
  //@ this methode is used to send email
  Selector.addSelector = function(newSelector, cb) {
    cb(null, "Your New user Is " + newSelector.email);
  };

  Selector.afterRemote("addSelector", function(ctx, instance, next) {
    // Create a new Password
    var password = generator.generate({
      length: 10,
      numbers: true
    });
    var html = ` <h2>Your Account credentials are : </h2>
                <span>Email : "${ctx.args.newSelector.email}"</span>
                </br>
                <span>Password : "${password}"</span>
                </br>
                <span>Link to access the platform : "${platfromLink}"</span>
                `;
    Selector.app.models.Email.send(
      {
        to: ctx.args.newSelector.email,
        from: "ost.com.tn@gmail.com",
        subject: "Welcome to OST platform",
        html: html
      },
      function(err) {
        if (err)
          return console.log(
            "> error sending password reset email",
            ctx.args.newSelector.email
          );
        console.log("> sending password reset email to:", ctx.args.email);
      }
    );

    const newSelector = {
      ...ctx.args.newSelector,
      password
    };
    console.log(newSelector);
    Selector.create(newSelector, function(err, userInstance) {
      console.log(userInstance);
    });
    next();
  });
  //Handle the addSelector remote methode
  //@ this route will handle generating a new selector in the database
  Selector.remoteMethod("addSelector", {
    accepts: { arg: "newSelector", type: "object" },
    returns: { arg: "message", type: "string" }
  });
};
