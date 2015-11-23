Template.new_event_dlg.onRendered(function() {
    this.$('.datepicker').datepicker({
      autoclose:true
    });
});
Template.new_event_dlg.events ({
  'hidden.bs.modal .newEvent': function(evt, tmp) {
    Session.set('editing_intervention_el', null);
    Session.set('selected_client', null);
    Session.set('selected_equipment', null);
    Session.set('selected_client_contact', null);
    Session.set('selected_car', null);
    Session.set('clicked_date', null);
    console.log('closed modal dialog and cleard Session elements!');
  },
  'show.bs.modal .newEvent': function(evt, tmp) {
    var selected_date = Session.get('clicked_date');
    var selected_intervention = Session.get('editing_intervention_el');

      if (selected_date) {
        tmp.find('#start_date').value = moment(selected_date).format('L');
        tmp.find('#end_date').value = moment(selected_date).format('L');
      }
      if (!selected_intervention) {
        tmp.find('#client_list_ctrl').value='';
        tmp.find('#equipment_list_ctrl').value='';
      }
      else {
        Session.set('selected_client', selected_intervention.client);
        tmp.find('#client_list_ctrl').value = selected_intervention.client;
        tmp.find('#equipment_list_ctrl').value = selected_intervention.equipment;
        tmp.find('#start_date').value = moment(selected_intervention.start).format('L');
        tmp.find('#end_date').value = moment(selected_intervention.end).format('L');
        tmp.find('#car_list_ctrl').value = selected_intervention.car;
        tmp.find('#client_list_contact_ctrl').value = selected_intervention.contact;
        tmp.find('#title').value = selected_intervention.title;
      }
  },

  'click .updateCalEvent': function test(evt, tmp) {
    var intervention = {
      start: tmp.find('#start_date').value,
      end: tmp.find('#end_date').value,
      client: tmp.find('#client_list_ctrl').value,
      title: tmp.find('#title').value,
      owner: Session.get('selected_user')|| Meteor.userId(),
      equipment: tmp.find('#equipment_list_ctrl').value,
      car: tmp.find('#car_list_ctrl').value,
      contact: tmp.find('#client_list_contact_ctrl').value,
      seen: false,
      accepted: false,
      creation_date: new Date(),
    };
    edinting_element = Session.get('editing_intervention_el');
    if (edinting_element) {
      intervention._id = edinting_element._id;
      Meteor.call('updateCalEvent', intervention);
    }
    else {
      Meteor.call('saveCalEvent', intervention);
    }
  },

});

Template.new_event_dlg.helpers ({
  'event' : function () {
      return  Session.get('editing_intervention_el');
    },
});
