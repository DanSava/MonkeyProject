///
/// Calendar Specific code
///
Template.calendar.onRendered(function () {
  Session.set('page', 4);
  var calendar = this.$('.mycal').fullCalendar ({
    'dayClick' : function (date, jsEvent, view) {
      Session.set('clicked_date', date);
      $("#newEvent").modal();
      //Meteor.call('saveCalEvent', intervention);
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
      element.css('border-width', '2px');
    },
    eventClick : function(calEvent, jsEvent, view) {
      Session.set('editing_intervention', calEvent._id);
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
      left:   'prev, next',
      center: 'title',
      right:  'month'
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
    'editing_intervention' : function () {
      return Session.get('editing_intervention');
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
      var id = Session.get('editing_intervention');
      if (id) {
        Meteor.call('removeEvent', id);
      }
    }
  });
