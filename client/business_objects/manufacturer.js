Template.manufacturer.events({
  'click .manufacturer_el' : function (evnt, tmp) {
      Session.set('selected_manufacturer', this);
  },
  'keypress .new_manufacturer': function(evnt, tmp) {
      var new_manufacturer_input = tmp.find('#new_manufacturer');
      var manufacturer_name = new_manufacturer_input.value;
      if (evnt.keyCode === 13 && manufacturer_name !== '') {
        var manufacturer = {
          name: manufacturer_name
        };
        Meteor.call('insert_manufacturer',  manufacturer);
        new_manufacturer_input.value = '';
        Session.set('show_new_manufacturer_input', false);
      }
  },
  'click .remove_manufacturer': function (evnt, tmp) {
    // Reset the manufacture selection if we are deleteing the current selection
    var selected_manufacturer = Session.get('selected_manufacturer');
    if (selected_manufacturer && this._id === selected_manufacturer._id){
      Session.set('selected_manufacturer', null);
    }
    // Remove the manufacture from the database
    Meteor.call('remove_manufacturer', this._id);
    evnt.stopPropagation();
  },
  'click .new_manufacturer_lbl': function (evnt, tmp) {
    Session.set('show_new_manufacturer_input', true);
    evnt.stopPropagation();
  },
  'hide.bs.dropdown .dropdown': function (evnt, tmp){
    Session.set('show_new_manufacturer_input', false);
  }
});

Template.manufacturer.helpers({
  'manufacturer_list' : function () {
    return Manufacturer.find();
  },
  'selected_manufacturer' : function () {
    var selected_manufacturer = Session.get('selected_manufacturer');
    if (selected_manufacturer) {
      return selected_manufacturer.name;
    }
    else {
      return 'Manufacturer';
    }
  },
  'show_new_manufacturer_input': function() {
    return Session.get('show_new_manufacturer_input');
  }
});
