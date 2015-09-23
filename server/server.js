if (Meteor.isServer) {
  Meteor.startup(function () {
    // Check if there is an admin
    if (Meteor.users.find({ "emails.address" : "admin@home.com" }).count() < 1) {
      var user_id = Accounts.createUser({
        email: "admin@home.com",
        password: 'test',
        username: 'Super Duper User',
        profile: {name:'Super User'}
      }); 

        Meteor.users.update({_id:user_id}, {$set:{'emails.0.verified': true}});
        Roles.addUsersToRoles(user_id, 'super');

    }
    // code to run on server at startup
  });

  Meteor.publish("lists", function () {
    return Lists.find();
  });
  Meteor.publish("todos", function () {
    return Todos.find();
  });
  Meteor.publish("calevent", function () {
    return CalEvent.find();
  });
  Meteor.publish("clients", function () {
    return Clients.find();
  });
  Meteor.publish("equipment", function () {
    return Equipment.find();
  });
  Meteor.publish("users", function() {
    return Meteor.users.find();
  });
}
