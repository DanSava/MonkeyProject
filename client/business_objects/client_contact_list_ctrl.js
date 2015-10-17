Template.client_contact_list_ctrl.events({
  'change .form-control': function (evt, tmp) {
    var ctrl = tmp.find('#client_list_contact_ctrl');
    console.log(this);
    Session.set('selected_client_contact', ctrl.value);
  },

});

Template.client_contact_list_ctrl.helpers({
  'client_contacts' : function () {
    var selected_client = Session.get('selected_client');
    if (selected_client) {
      var cl = Clients.find({name: selected_client}).fetch();
      console.log(cl[0].contacts);
      return cl[0].contacts;
    }
    return null;
  }
});
