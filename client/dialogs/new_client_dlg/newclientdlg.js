function check_client(client){

}

Template.new_client_dlg.events({

'click .save_info_dlg' : function (evt, tmp) {
    var name = tmp.find('#client_name').value,
    address = tmp.find('#client_adr').value,
    contact_person = tmp.find('#client_contact_person').value,
    email = tmp.find('#client_email').value;

    var new_client = {};
    new_client.name =  name;
    new_client.address = address;
    new_client.contact_person = contact_person;
    new_client.email = email;

    // Update the client if there is one being edited or add a new client if
    //There is no client being edited.
    editing_client_id = Session.get('editing_client_id');
    if (editing_client_id) {
      new_client._id = editing_client_id;
      Meteor.call('update_client', new_client);
    }
    else {
      Meteor.call('insert_client', new_client);
    }
},
'hidden.bs.modal .new_client': function(evt, tmp) {
  Session.set('editing_client_id', null);
},
'click .test_shit': function (evt, tmp) {
  var c = Clients.findOne({"_id" : Session.get('editing_client_id')});
  alert(c.name);
}
});

Template.new_client_dlg.helpers ({

  'editing_client': function () {
      var editing_client_id = Session.get('editing_client_id');
      if (editing_client_id) {
        var client = Clients.findOne({"_id" : editing_client_id});
        editing_client =  {
          'name':client.name,
          'address':client.address,
          'contact_person':client.contact_person,
          'email': client.email
        };
      return  client;
      }
      return null;
  }

});
