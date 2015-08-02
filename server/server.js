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
  Meteor.publish("clients", function () {
    return Clients.find();
  });
  Meteor.publish("equipment", function () {
    return Equipment.find();
  });
}
