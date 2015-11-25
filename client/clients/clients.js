Template.clients.onRendered(function(){
Session.set('page', 1);
});

Template.clients.helpers({
  'client_list' : function (){
    return Clients.find();
  }
});

Template.clients.events({
  'click .open_dlg_btn' : function (evt, tmp) {

  },
  'click .new_client_act' : function (evt, tmp) {
    $("#new_client").modal('show');
  }
});

Template.client_item.events({
  'click .edit_client' : function (evt, tmp) {
    Session.set('editing_client', this);
    $("#new_client").modal('show');
  },

  'click .remove_client' : function (evt, tmp) {
    Meteor.call('remove_client', this._id);
  }

});
