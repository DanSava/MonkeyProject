Template.navigation.helpers({
	isHomeActive: function () {
    if (Session.equals("page",0)){
    	return 'active';
    }
    return '';
  },
	isAboutActive: function () {
    if (Session.equals("page", 1)){
    	return 'active';
    }
    return '';
  },
	isTodoActive : function () {
    if (Session.equals("page", 2)){
    	return 'active';
    }
    return '';
  },
	isMyCalendarActive : function () {
		if (Session.equals("page", 3)){
			return 'active';
		}
		return '';
	},
	projectName: function(){
		return 'Micro-Top';
	},
	'isUserConnected': function () {
		return Meteor.userId();
	}
});
Template.navigation.events({
	'click .logOutBtn': function () {
		Session.set('page', 0);
		Meteor.logout();
	}
});
