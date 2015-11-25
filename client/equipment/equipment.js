Template.equipment.onRendered(function(){
Session.set('page', 1);
});

Template.equipment.helpers({
  'equipment_list' : function (){
    return Equipment.find();
  }
});

Template.equipment.events({
  'click .open_dlg_btn' : function (evt, tmp) {

  },
  'click .new_equipment_act' : function (evt, tmp) {
    $("#equipment_dlg").modal('show');
  }
});

Template.equipment_item.events({
  'click .edit_equipment' : function (evt, tmp) {
    Session.set('editing_equipment', this);
    $("#equipment_dlg").modal('show');
  },
  'click .remove_equipment' : function (evt, tmp) {
    Meteor.call('remove_equipment', this._id);
  }
});
