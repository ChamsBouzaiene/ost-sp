module.exports = function(app) {
  var Role = app.models.Role;
  //   console.log(Role)
  Role.registerResolver("ADMIN", function(role, context, cb) {
    var userId = context.accessToken.userId;
    var email = context.accessToken;
    console.log(email);
    console.log(userId);
    if (!userId) {
      console.log("Connected user Id", userId);
      return process.nextTick(() => cb(null, false));
    }
    var admins = app.models.Admin;
    admins.findById(userId, function(err, admin) {
      if (err) return cb(err);
      if (!admin) return cb(new Error("Id not found"));
      console.log("his user id is !!", admin.id);
      console.log("his role is !!", admin.role);
      return process.nextTick(() => cb(null, true));
    });
  });
};
