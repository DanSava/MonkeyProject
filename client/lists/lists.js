Template.lists.events({
	'keyup .name': function (evt, tmp) {
		if(evt.which === 13){
			var txt = tmp.find('.name').value;
			Meteor.call("addList", txt);
			tmp.find('.name').value = "";
		}
	}
});

Template.lists.helpers({
	'lists' : function(){
		return Lists.find();
	}
});

Template.listitem.events({
	'click .list':function(evt,tm){
		Session.set('listid', this._id);
	},
	'click .removeListItem':function(evt,tm){
		Meteor.call("deleteList", this._id);
	}
});
