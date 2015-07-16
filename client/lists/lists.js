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
	'click .removeListItem':function(evt, tmp){
		Meteor.call("deleteList", this._id);
	},
	'dblclick .list': function(evt, tmp) {
		Session.set('editingList', this._id);
	},
	'keyup .newListTxt':function(evt, tmp){
		if(evt.which === 13){
			var txt = tmp.find('.newListTxt').value;
			if (txt) {
				Meteor.call('updateList', this._id, txt)
			};
			Session.set('editingList', null);
		}
	}
});
Template.listitem.helpers({
	'editinglist' : function () {
			return Session.get('editingList') === this._id;
	}
})
