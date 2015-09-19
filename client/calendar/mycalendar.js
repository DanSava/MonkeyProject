Template.newEventDialog.onRendered(function() {
    this.$('.datepicker').datepicker({
      autoclose:true
    });
});

Template.newEventDialog.events ({
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

Template.newEventDialog.helpers ({
  'event' : function () {
      var evnt = CalEvent.findOne({_id: Session.get('editing_event') });
      if (evnt){
        return evnt;
      }
    return null;
  }
});

///
/// Calendar Specific code
///
Template.calendar.onRendered(function () {
  Session.set('page', 4);
  var calendar = this.$('.mycal').fullCalendar ({
    'dayClick' : function (date, jsEvent, view) {
      var calendarEvent = {};
      calendarEvent.start = date;
      calendarEvent.end = date;
      calendarEvent.title = 'New Event';
      calendarEvent.owner = Meteor.userId();
      $("#newEvent").modal();
      //Meteor.call('saveCalEvent', calendarEvent);
    },

    'events' : function (start, end, callback) {
      var calEvents = CalEvent.find({owner:Meteor.userId()},{reactive:false}).fetch();
      callback(calEvents);
    },

    eventDrop :function (reqEvent) {
      Meteor.call('moveEvent', reqEvent);
    },
    editable : true,
    selectable : true,

    eventRender : function(event, element) {
      element.html(event.title  +'<span class="removeEvent glyphicon glyphicon-trash pull-right" id="Delete"></span>');
    },

    eventClick : function(calEvent, jsEvent, view) {
      Session.set('editing_event', calEvent._id);
      if (jsEvent.target.id !== 'Delete'){
        $("#newEvent").modal();
        // change the border color just for fun
        //$(this).css('border-color', 'red');
      }
    },

    selectOverlap : function(event) {
        return event.rendering === 'background';
    },
    header: {
      left:   'today, prev, next',
      center: 'title',
      right:  'basicWeek, month'
    }
  }).data().fullCalendar;
  Deps.autorun (function () {
    CalEvent.find().fetch();
    if (calendar) {
      calendar.refetchEvents();
    }
  });
});

///
/// Helpers
///
Template.calendar.helpers({
    'editing_event' : function () {
      return Session.get('editing_event');
    },
    'events' : function () {
      return CalEvent.find();
    }
  });

  ///
  /// Events
  ///
  Template.calendar.events ({
    'click .removeEvent' : function (evt, tmp) {
      var id = Session.get('editing_event');
      if (id) {
        Meteor.call('removeEvent', id);
      }
    }
  });
