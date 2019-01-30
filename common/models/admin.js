"use strict";
var generator = require("generate-password");
var platfromLink = "http://localhost:3001/admin/";

module.exports = function(Admin) {
  //Validate Uninqueness of Email
  Admin.validatesUniquenessOf("email", {
    message: "Email already Exist"
  });
  //Create a new remote methode that except user Email
  //@ this methode is used to send email
  Admin.addAdmin = function(newAdmin, cb) {
    cb(null, "Your New user Is " + newAdmin.email);
  };

  Admin.afterRemote("addAdmin", function(ctx, instance, next) {
    // Create a new Password
    var password = generator.generate({
      length: 10,
      numbers: true
    });
    var html = ` <h2>Your Account credentials are : </h2>
                <span>Email : "${ctx.args.newAdmin.email}"</span>
                </br>
                <span>Password : "${password}"</span>
                </br>
                <span>Link to access the platform : "${platfromLink}"</span>
                `;
    Admin.app.models.Email.send(
      {
        to: ctx.args.newAdmin.email,
        from: "ost.com.tn@gmail.com",
        subject: "Welcome to OST platform",
        html: html
      },
      function(err) {
        if (err)
          return console.log(
            "> error sending password reset email",
            ctx.args.newAdmin.email
          );
        console.log("> sending password reset email to:", ctx.args.email);
      }
    );

    const newAdmin = {
      ...ctx.args.newAdmin,
      password
    };
    console.log(newAdmin);
    Admin.create(newAdmin, function(err, userInstance) {
      console.log(userInstance);
    });
    next();
  });
  //Handle the addAdmin remote methode
  //@ this route will handle generating a new Admin in the database
  Admin.remoteMethod("addAdmin", {
    accepts: { arg: "newAdmin", type: "object" },
    returns: { arg: "message", type: "string" }
  });
};
