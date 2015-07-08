Template.builder.onRendered(function(){
Session.set('page',2);
});

Template.builder.events({
  'onChange .form-control': function () {
      alert('s');
  }
});
