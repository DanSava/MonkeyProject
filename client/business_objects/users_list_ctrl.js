Template.user_list_ctrl.events({
  'change .form-control': function (evt, tmp) {
    var ctrl = tmp.find('#user_list_ctrl');
    console.log(ctrl.value, this._id);
  },
});

Template.user_list_ctrl.helpers({
  'user_list' : function () {
    if (Roles.userIsInRole(Meteor.user(),['super'])) {
      return Meteor.users.find();
    }
    else{
      return null;
    }
  }
});
