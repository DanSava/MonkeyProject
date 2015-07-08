Template.home.onRendered(function(){
Session.set('page', 0);
});
Template.home.helpers({
    getUser: function(){
      if (Meteor.userId()) {
        return Meteor.user();
      }
      return 'Please Login first!'
    }
});

Template.home.events({

});
