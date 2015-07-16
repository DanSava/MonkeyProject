Template.home.onRendered(function(){
Session.set('page', 0);
});
Template.home.helpers({
    'currentUser' : function(){
      return Meteor.userId()
    }
});

Template.home.events({

});
