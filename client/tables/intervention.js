Template.intervention.onRendered(function(){
Session.set('page', 5);
});

Template.intervention.helpers({
  'intervention_list' : function () {
    var user = Meteor.user();
    if(!Roles.userIsInRole(user, ['super'])) {
      return CalEvent.find({owner:Meteor.userId()}).fetch();
    }
    else {
      return CalEvent.find().fetch();
    }
  }
});

Template.intervention.events({
  'click .new_intervention_act' : function (evt, tmp) {
    $("#newEvent").modal();
  }
});

Template.intervention_item.events({
  'click .editing_intervention' : function (evt, tmp) {
    Session.set('editing_intervention', this._id);
    $("#newEvent").modal();
  },

  'click .remove_intervention' : function (evt, tmp) {
    Meteor.call('removeEvent', this._id);
  }

});
