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
	projectName: function(){
		return 'Micro-Top'
	},
	'isUserConnected': function () {
		return Meteor.userId();
	}
});
