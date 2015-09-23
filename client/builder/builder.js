Template.builder.onRendered(function(){
Session.set('page',2);
});

Template.builder.events({ //does not work
  'change .form-control': function () {
      alert(this._id);
  },
  'click .client_item' : function (evt, tmp) {//does not work
    alert(this._id);
  }
});

Template.builder.helpers({
  'clients' : function () {
   return Clients.find();
  }
});
