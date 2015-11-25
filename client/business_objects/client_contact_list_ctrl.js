
Template.client_contact_list_ctrl.events({
  'change .form-control': function (evt, tmp) {
    var select = tmp.find('#client_list_contact_ctrl');
    var selectedElement = select.item(select.selectedIndex);
    var client = {
      name: select.value,
      idx : selectedElement.getAttribute("idx"),
      email : selectedElement.getAttribute("email"),
      tel : selectedElement.getAttribute("telefone")
    };
    Session.set('selected_client_contact', client);
    console.log(client);
  },
  'click .client_contact_item': function (evt, tmp){
    console.log(this);
  }

});

Template.client_contact_list_ctrl.helpers({
  'client_contacts' : function () {
    var selected_client = Session.get('selected_client');
    if (selected_client) {
      var cl = Clients.find({name: selected_client}).fetch();
      if (cl){
        Session.set('selected_client_contact', cl[0].contacts[0]);
        return cl[0].contacts;
      }
    }
    return null;
  }
});
