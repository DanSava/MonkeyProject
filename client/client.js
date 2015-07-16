if (Meteor.isClient) {
	Meteor.subscribe("lists");
  Meteor.subscribe("todos");
	Meteor.subscribe("calevent")
}
