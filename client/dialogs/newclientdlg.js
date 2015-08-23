Template.new_client_dlg.events({
'click .save_info_dlg' : function (evt, tmp) {
    var name = tmp.find('#client_name').value;
    var address = tmp.find('#client_adr').value;
    var contact_person = tmp.find('#client_contact_person').value
    var email = tmp.find('#client_email').value;
    var new_client = {};
    new_client.name =  name;
    new_client.address = address;
    new_client.contact_person = contact_person;
    new_client.email = email;
    Meteor.call('insert_client', new_client);
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
      var client = Clients.findOne({"_id" : Session.get('editing_client_id')});
      editing_client =  {
        'name': client.name,
        'address':client.address,
        'contact_person':client.contact_person,
        'email': client.email
      }
    return  client;
  }

});
