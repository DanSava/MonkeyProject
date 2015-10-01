Template.equipment_type.events({
  'click .equipment_type_el' : function (evnt, tmp) {
      Session.set('selected_equipment_type', this);
  },
  'keypress .new_equipment_type': function(evnt, tmp) {
      var new_equipment_type_input = tmp.find('#new_equipment_type');
      var equipment_type_name = new_equipment_type_input.value;
      if (evnt.keyCode === 13 && equipment_type_name !== '') {
        var equipment_type = {
          name: equipment_type_name
        };
        Meteor.call('insert_equipment_type',  equipment_type);
        new_equipment_type_input.value = '';
        Session.set('show_new_equipment_type_input', false);
      }
  },
  'click .remove_equipment_type': function (evnt, tmp) {
    var selected_equipment_type = Session.get('selected_equipment_type');
    if (selected_equipment_type && this._id === selected_equipment_type._id) {
      Session.set('selected_equipment_type', null);
    }
    Meteor.call('remove_equipment_type', this._id);
    evnt.stopPropagation();
  },
  'click .new_equipment_type_lbl': function (evnt, tmp) {
    Session.set('show_new_equipment_type_input', true);
    evnt.stopPropagation();
  },
  'hide.bs.dropdown .dropdown': function (evnt, tmp){
    Session.set('show_new_equipment_type_input', false);
  }
});

Template.equipment_type.helpers({
  'equipment_type_list' : function () {
    return EquipmentType.find();
  },
  'selected_equipment_type' : function () {
    var selected_equipment_type = Session.get('selected_equipment_type');
    if (selected_equipment_type) {
      return selected_equipment_type.name;
    }
    else {
      return 'Type';
    }
  },
  'show_new_equipment_type_input': function() {
    return Session.get('show_new_equipment_type_input');
  }
});
