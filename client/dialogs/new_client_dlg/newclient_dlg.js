var contacts = [];
contacts.push({name:'', email:'', telefone:'', idx:contacts.length});
Session.set('client_contacts', contacts);

function reset_contacts() {
  contacts = [];
  contacts.push({name:'', email:'', telefone:'', idx:contacts.length});
  Session.set('client_contacts', contacts);
}
function get_contacts(tmp) {
  contacts.forEach(function (el, index, array) {
    el.name = tmp.find('#client_contact_name_'+ index).value;
    el.email = tmp.find('#client_contact_email_'+ index).value;
    el.telefone = tmp.find('#client_contact_tel_'+ index).value;
  });
  return contacts;
}

Template.new_client_dlg.events({
'click .save_info_dlg' : function (evt, tmp) {
    var new_client = {
      name : tmp.find('#client_name').value,
      address: tmp.find('#client_adr').value,
      contacts: get_contacts(tmp),
      city:tmp.find('#city_list_input').value,
    };

    // Update the client if there is one being edited or add a new client if
    //There is no client being edited.
    editing_client = Session.get('editing_client');
    if (editing_client) {
      new_client._id = editing_client._id;
      Meteor.call('update_client', new_client);
    }
    else {
      Meteor.call('insert_client', new_client);
    }
},
'hidden.bs.modal .new_client': function(evt, tmp) {
  Session.set('editing_client', null);
  reset_contacts(tmp);
},
'click .add_client_contact': function (evt, tmp) {
  contacts.push({name:'', email:'', telefone:'', idx:contacts.length});
  Session.set('client_contacts', contacts);
}
});

Template.new_client_dlg.helpers ({
  // Returns the client that is currently being edited.
  'editing_client': function () {
      var client = Session.get('editing_client');
        if (client) {
          contacts = client.contacts;
          Session.set('client_contacts', contacts);
          return  client;
        }
      return null;
  },
  'contact_list': function () {
    var contacts = Session.get('client_contacts');
    return contacts;
  }
});
