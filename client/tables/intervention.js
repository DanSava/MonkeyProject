Template.intervention.helpers({
  'intervention_list' : function () {
    var user = Meteor.user();
    if(!Roles.userIsInRole(user, ['super'])) {
      return CalEvent.find({owner:Meteor.userId()}, {sort: {creation_date: -1}}).fetch();
    }
    else {
      return CalEvent.find({}, {sort: {creation_date: -1}}).fetch();
    }
  }
});

Template.intervention.events({
  'click .new_intervention_act' : function (evt, tmp) {
    $("#newEvent").modal();
  }
});

Template.intervention_item.events({
  'click .edit_intervention' : function (evt, tmp) {
    Session.set('editing_intervention', this._id);
    $("#newEvent").modal();
  },
  'click .remove_intervention' : function (evt, tmp) {
    Meteor.call('removeEvent', this._id);
  },
 'click .intervention_title': function(evt, tmp) {
   Session.set('show_intervention_details', this);
 }
});
Template.intervention_item.helpers({
  'date': function() {
    return moment(this.creation_date).fromNow();
  },
  'owner':function () {
    var user = Meteor.users.findOne({_id:this.owner});
    if (user) {
        return user.username;
    }
    return "";
  }
});

Template.intervention_details.helpers({
  'date': function() {
    var d = Session.get('show_intervention_details');
    return moment(d.creation_date).fromNow();
  },
  'details': function (){
    return Session.get('show_intervention_details');
  },
  'owner' : function () {
    var d = Session.get('show_intervention_details');
    return Meteor.users.findOne({_id:d.owner}).username;
  }
});

Template.intervention_details.events({
  'click .back_btn': function (evt, tmp){
    Session.set('show_intervention_details', null);
  }
});
