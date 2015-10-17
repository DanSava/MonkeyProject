Template.client_list_ctrl.events({
  'change .form-control': function (evt, tmp) {
    var ctrl = tmp.find('#client_list_ctrl');
    Session.set('selected_client', ctrl.value);
  },
});

Template.client_list_ctrl.helpers({
  'clients' : function () {
   return Clients.find();
  }
});
