Template.clients.onRendered(function(){
Session.set('page', 5);
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
})

Template.client_item.events({
  'click .edit_client' : function (evt, tmp) {
    Session.set('editing_client_id', this._id)
    $("#new_client").modal('show');
  }
})
