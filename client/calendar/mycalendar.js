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
      calendarEvent.backgroundColor = 'green';
      $("#newEvent").modal();
      //Meteor.call('saveCalEvent', calendarEvent);
    },
    'events' : function (start, end, callback) {
      var user = Meteor.user();
      if(!Roles.userIsInRole(user, ['super'])) {
        var user_events = CalEvent.find({owner:Meteor.userId()}, {reactive:false}).fetch();
        callback(user_events);
      }
      else {
        all_events = CalEvent.find().fetch();
        callback(all_events);
      }
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
        $(this).css('border-color', 'red');
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
    },
    'users': function () {
      return Meteor.users.find();
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
