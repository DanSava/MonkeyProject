Template.car_list_ctrl.events({
  'change .form-control': function (evt, tmp) {
    var ctrl = tmp.find('#car_list_ctrl');
    Session.set('selected_car', ctrl.value);
  },
});

Template.car_list_ctrl.helpers({
  'car' : function () {
   return Car.find();
  }
});
