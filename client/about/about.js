Template.about.onRendered(function(){
});

Template.about.helpers({
  title: function() {
      if (Session.equals('active_menu','client')) {
        return "Client ";
      }
      if (Session.equals('active_menu','equipment')) {
        return "Equipment ";
      }
      if (Session.equals('active_menu','car')) {
        return "Car ";
      }
  }
});

Template.navigation_side_bar.events({
  'click .client_item': function (evt, tmp){
    console.log(Session.get('active_menu'));
    Session.set('active_menu', 'client');
  },
  'click .equipment_item': function (evt, tmp){
    Session.set('active_menu', 'equipment');
  },
  'click .car_item': function (evt, tmp){
    Session.set('active_menu', 'car');
  }
});

Template.navigation_side_bar.helpers({
  'is_client_active': function (){
      if (Session.equals('active_menu', 'client')) {
        return "active";
      }
      return null;
  },
  'is_equipment_active': function (){
      if (Session.equals('active_menu', 'equipment')){
        return "active";
      }
      return null;
  },
  'is_car_active': function (){
      if (Session.equals('active_menu', 'car')){
        return "active";
      }
      return null;
  }

});
