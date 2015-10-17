Template.car_list_ctrl.events({
  'change .form-control': function (evt, tmp) {
    var ctrl = tmp.find('#car_list_ctrl');
    Session.set('car_client', ctrl.value);
  },
});

Template.car_list_ctrl.helpers({
  'car' : function () {
   return Car.find();
  }
});
