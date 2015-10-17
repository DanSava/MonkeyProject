Template.builder.onRendered(function(){
Session.set('page',2);
});

Template.builder.events({
});

Template.builder.helpers({
});

// Add the template helper to get the Vendors list
Template.vendorNames.helpers({
  vendorNames: function() {
    return Clients.find();
  }
});
Template.vendorNames.events({
  'click .ok_btn': function (evt, tmp){
      console.log(evt.type);
      console.log($('.some_input').hasClass('foo'));
}

});

Template.vendorNames.onRendered(function() {
  ddw = $('.ui.selection.dropdown').dropdown({on: 'hover'});
  console.log(ddw);
});
