Template.new_event_dlg.onRendered(function() {
    this.$('.datepicker').datepicker({
      autoclose:true
    });
});

Template.new_event_dlg.events ({
  'hidden.bs.modal .newEvent': function(evt, tmp) {
    Session.set('editing_event', null);
  },

  'click .updateCalEvent': function test(evt, tmp) {
    var calendarEvent = {};
    calendarEvent.start = tmp.find('#start_date').value;
    calendarEvent.end = tmp.find('#end_date').value;
    calendarEvent.title = tmp.find('#title').value;
    calendarEvent.owner = Meteor.userId();
    console.log(Session.get('editing_event'));

    if (Session.get('editing_event')) {
      Meteor.call('updateCalEvent', Session.get('editing_event'), calendarEvent.title);
    }
    else {
      console.log(calendarEvent);
      Meteor.call('saveCalEvent', calendarEvent);
    }
  },

  'keyup .newCalEvtTitle': function (evt, tmp) {
    if (evt.which == 13) {
      var txt = tmp.find('#title').value;
      if (txt) {
        Meteor.call('updateCalEvent', Session.get('editing_event'), txt);
      }
        $("#newEvent").modal('hide');
    }
  }
});

Template.new_event_dlg.helpers ({
  'event' : function () {
      var evnt = CalEvent.findOne({_id: Session.get('editing_event') });
      if (evnt){
        return evnt;
      }
    return null;
  },

  'clients' : function () {
   return Clients.find();
  }
});
