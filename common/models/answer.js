"use strict";

module.exports = function(Answer) {
  Answer.beforeRemote("**", function(ctx, modelInstance, next) {
    console.log("A So3louk is trying to submit an answer");
    console.log("me is doing stupid things ", modelInstance);
    console.log(ctx.args);
    //console.log("this is the current syntax", context);
    ///// Log the MotherFucker!!
    const token = ctx.options && ctx.options.accessToken;
    console.log(token);
    const userId = ctx.args.options.accessToken.userId;
    console.log("%s: %s accessed ", new Date(), userId);
    const user = userId ? "user#" + userId : "<anonymous>";

    Answer.app.models.Candidate.findById(userId, function(err, candidate) {
      //Find the ostUser userId
      // What's his userid
      // what's his Role
      if (err) {
        return next(err);
      }
      if (!candidate) {
        return next(new Error("Id not found"));
      }
      console.log("User Found!!");
      console.log("his user id is !!", candidate.id);
      console.log("his role is !!");
      candidate.answers({}, function(err, answers) {
        //get assessment number count
        Answer.app.models.Assesment.count({}, function(err, count) {
          if (err) {
            return next(new Error("an error has occured"));
          }
          if (answers.length <= count) {
            return next();
          } else {
            console.log("questions ", count);
            console.log(answers);
            console.log("He had submited his answers !!");
            console.log("Fuck off !!");

            next(new Error("Just leave me alone"));
          }
        });
      });
    });
  });
};
