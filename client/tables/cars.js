Template.car_table.events({
  'click .new_car_act':function(evt, tmp){
    Session.set('add_new_car', true);
  }
});
Template.car_table.helpers({
  'car': function() {
    return Car.find();
  },
  'adding_new_car': function () {
    return Session.get('add_new_car');
  }
});
Template.car_item.events({
'click .remove_car': function (evt, tmp) {
  Meteor.call('remove_car', this._id);
},
'click .edit_car': function (evt, tmp) {
  Session.set('editing_car_id', this._id);
}
});
Template.car_item.helpers({
  'editing_car': function () {
    	return Session.get('editing_car_id') === this._id;
  }
});

Template.new_car.events({
  'keyup .new_car_input': function (evt, tmp) {
    console.log('key up');
    if(evt.which === 13){
      var new_car =  {
        plate: tmp.find('#new_car_input').value,
      };
      console.log(new_car);
      if (new_car.plate !== '') {
        if (Session.get('editing_car_id')){
          new_car._id = Session.get('editing_car_id');
          Meteor.call('update_car', new_car);
        }
        else if (Session.get('add_new_car')) {
          console.log('a new car should be added');
          Meteor.call('insert_car', new_car);
        }
      }
      Session.set('add_new_car', false);
      Session.set('editing_car_id', null);
    }
  },
  'focusout .new_car_input': function (evt, tmp) {
    console.log('lose focus ');
    Session.set('add_new_car', false);
    Session.set('editing_car_id', null);
  }
});
