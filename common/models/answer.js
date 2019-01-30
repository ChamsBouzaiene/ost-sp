"use strict";

module.exports = function(Answer) {
  //Stopping user from submit other answers this idea was ditched
  // Answer.beforeRemote("**", function(ctx, modelInstance, next) {
  //   console.log("A So3louk is trying to submit an answer");
  //   console.log("me is doing stupid things ", modelInstance);
  //   console.log(ctx.args);
  //   //console.log("this is the current syntax", context);
  //   ///// Log the MotherFucker!!
  //   const token = ctx.options && ctx.options.accessToken;
  //   console.log(token);
  //   const userId = ctx.args.options.accessToken.userId;
  //   console.log("%s: %s accessed ", new Date(), userId);
  //   const user = userId ? "user#" + userId : "<anonymous>";

  //   Answer.app.models.Candidate.findById(userId, function(err, candidate) {
  //     //Find the ostUser userId
  //     // What's his userid
  //     // what's his Role
  //     if (err) {
  //       return next(err);
  //     }
  //     if (!candidate) {
  //       return next(new Error("Id not found"));
  //     }
  //     console.log("User Found!!");
  //     console.log("his user id is !!", candidate.id);
  //     console.log("his role is !!");
  //     candidate.answers({}, function(err, answers) {
  //       //get assessment number count
  //       Answer.app.models.Assesment.count({}, function(err, count) {
  //         if (err) {
  //           return next(new Error("an error has occured"));
  //         }
  //         if (answers.length <= count) {
  //           return next();
  //         } else {
  //           console.log("questions ", count);
  //           console.log(answers);
  //           console.log("He had submited his answers !!");
  //           console.log("Fuck off !!");

  //           next(new Error("Just leave me alone"));
  //         }
  //       });
  //     });
  //   });
  // });

  //Create a new remote methode that except user Email
  //@ this methode is used to send email
  Answer.submitYoutubeVideo = function(youtubeLink, cb) {
    cb(null, "Your New user Is " + youtubeLink);
  };

  Answer.afterRemote("submitYoutubeVideo", function(ctx, instance, next) {
    // Create a new Password
    console.log(ctx.req.accessToken.userId);
    const userId = ctx.req.accessToken.userId;
    const youtubeLink = ctx.args.youtubeLink;
    console.log(ctx.args);
    console.log(youtubeLink);
    [12, 13, 14, 15].map(el => {
      Answer.create({ answer: youtubeLink, userId, assessmentId: el }, function(
        err,
        answernstance
      ) {
        console.log("created", answernstance);
      });
    });
    next();
  });
  //Handle the addSelector remote methode
  //@ this route will handle generating a new selector in the database
  Answer.remoteMethod("submitYoutubeVideo", {
    accepts: { arg: "youtubeLink", type: "string" },
    returns: { arg: "message", type: "string" }
  });
};
