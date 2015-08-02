Template.builder.onRendered(function(){
Session.set('page',2);
});

Template.builder.events({
  'onChange .form-control': function () {
      alert('s');
  },
  'click .client_item' : function (evt, tmp) {
    alert(this._id);
  }
});

Template.builder.helpers({
  'clients' : function () {
   return Clients.find();
  }
});
