if (Meteor.isClient) {
	Meteor.subscribe("lists");
  Meteor.subscribe("todos");
	Meteor.subscribe("calevent");
	Meteor.subscribe("clients");
	Meteor.subscribe("equipment");
	Meteor.subscribe("users");
	Meteor.subscribe("manufacturer");
	Meteor.subscribe("equipment_type");
	Meteor.subscribe("car");
}
