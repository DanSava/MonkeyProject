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
}
});
