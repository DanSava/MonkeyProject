Template.new_event_dlg.onRendered(function() {
    this.$('.datepicker').datepicker({
      autoclose:true
    });
});
Template.new_event_dlg.events ({
  'hidden.bs.modal .newEvent': function(evt, tmp) {
    Session.set('editing_intervention', null);
  },
  'show.bs.modal .newEvent': function(evt, tmp) {
    var selected_date = Session.get('clicked_date');
      if (selected_date) {
        tmp.find('#start_date').value = moment(selected_date).format('L');
        tmp.find('#end_date').value = moment(selected_date).format('L');
      }
      if (!Session.get('editing_intervention')) {
        // Making sure there is no client or equipment already slected.
        Session.set('selected_client', null);
        Session.set('selected_equipment', null);
        tmp.find('#client_list_ctrl').value='';
        tmp.find('#equipment_list_ctrl').value='';
      }
  },

  'click .updateCalEvent': function test(evt, tmp) {
    var intervention = {
      start: tmp.find('#start_date').value,
      end: tmp.find('#end_date').value,
      title: tmp.find('#title').value,
      owner: Session.get('selected_user')|| Meteor.userId(),
      equipment: '',
      car: '',
      contact: '',
      seen: false,
      accepted: false,
      creation_date: new Date(),
    };
    if (Session.get('editing_intervention')) {
      Meteor.call('updateCalEvent', Session.get('editing_intervention'), intervention.title);
    }
    else {
      Meteor.call('saveCalEvent', intervention);
    }
  },

  'keyup .newCalEvtTitle': function (evt, tmp) {
    if (evt.which == 13) {
      var txt = tmp.find('#title').value;
      if (txt) {
        Meteor.call('updateCalEvent', Session.get('editing_intervention'), txt);
      }
        $("#newEvent").modal('hide');
    }
  }
});

Template.new_event_dlg.helpers ({
  'event' : function () {
      var evnt = CalEvent.findOne({_id: Session.get('editing_intervention') });
      if (evnt){
        return evnt;
      }
    return null;
  },

  'clients' : function () {
   return Clients.find();
  }
});
