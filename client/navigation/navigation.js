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
	isBuilderActive: function () {
    if (Session.equals("page", 2)){
    	return 'active';
    }
    return '';
  },
	isTodoActive : function () {
    if (Session.equals("page", 3)){
    	return 'active';
    }
    return '';
  },
	isMyCalendarActive : function () {
		if (Session.equals("page", 4)){
			return 'active';
		}
		return '';
	},
	is_clients_active : function () {
		if (Session.equals("page", 5)){
			return 'active';
		}
		return '';
	},
	is_equipment_active : function () {
		if (Session.equals("page", 6)){
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
