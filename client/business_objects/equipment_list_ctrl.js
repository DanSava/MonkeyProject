Template.equipment_list_ctrl.events({
  'change .form-control': function (evt, tmp) {
    var ctrl = tmp.find('#equipment_list_ctrl');
    console.log(this);
    Session.set('selected_equipment',ctrl.value);
  },
});

Template.equipment_list_ctrl.helpers({
  'equipment' : function () {
    var selected_client = Session.get('selected_client');
    console.log(selected_client);
    if (selected_client){
      return Equipment.find({'client': selected_client});
    }
   return Equipment.find();
  }
});
