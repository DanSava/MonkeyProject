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
  }
});