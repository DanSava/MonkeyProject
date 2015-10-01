
Template.equipment_dlg.events({

'click .save_info_dlg' : function (evt, tmp) {
    var new_equipment = {
      type: Session.get('selected_equipment_type').name,
      manufacturer:  Session.get('selected_manufacturer').name,
      name:  tmp.find('#equipment_name').value,
      serial_no:  tmp.find('#equipment_serial_no').value,
      size: tmp.find('#equipment_size').value,
      install_date:  tmp.find('#equipment_install_date').value,
      last_check_date: tmp.find('#equipment_install_date').value,
    };
    // Update the equipment if there is one being edited or add a new equipment if
    // There is no equipment being edited.
    editing_equipment_id = Session.get('editing_equipment_id');
    if (editing_equipment_id) {
      new_equipment._id = editing_equipment_id;
      new_equipment.last_check_date = tmp.find('#equipment_last_check_date').value;
      Meteor.call('update_equipment', new_equipment);
    }
    else {
      Meteor.call('insert_equipment', new_equipment);
    }
},

'hidden.bs.modal .equipment_dlg': function(evt, tmp) {
  Session.set('editing_equipment_id', null);
  Session.set('selected_equipment_type', null);
  Session.set('selected_manufacturer', null);
},
});

Template.equipment_dlg.helpers ({
  'editing_equipment': function () {
      var editing_equipment_id = Session.get('editing_equipment_id');
      if (editing_equipment_id) {
        var equipment =  Equipment.findOne({"_id" : editing_equipment_id});
        return equipment;
      }
      return null;
  }

});
