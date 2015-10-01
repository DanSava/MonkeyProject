Template.builder.onRendered(function(){
Session.set('page',2);
});

Template.builder.events({
  'change .form-control': function (evt, tmp) {
      //alert(tmp.find('#test').value);
  },
});

Template.builder.helpers({
  'clients' : function () {
   return Clients.find();
  }
});
