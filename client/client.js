if (Meteor.isClient) {
	Meteor.subscribe("lists");
  Meteor.subscribe("todos");
	Meteor.subscribe("calevent");
	Meteor.subscribe("clients");
	Meteor.subscribe("equipment");
	Meteor.subscribe("users");
}
