Template.home.onRendered(function(){
});
Template.home.helpers({
    'currentUser' : function(){
      return Meteor.userId();
    }
});

Template.home.events({

});
