if (Meteor.isServer) {
  Meteor.startup(function (){
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
}
