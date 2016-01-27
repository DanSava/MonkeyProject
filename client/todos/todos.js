Template.todos.onRendered(function(){
});

Template.todos.helpers({
	'list': function () {
		return Lists.findOne(Session.get('listid'));
	},
	'todolist': function(){
		return Todos.find({listid:Session.get('listid')});
	}
});
Template.todos.events({
	'keyup .todotext': function(evt,tmp){
		if(evt.which === 13){
			var txt = tmp.find('.todotext').value;
			Meteor.call("addTodo", Session.get('listid'), txt);
			tmp.find('.todotext').value = "";
		}
	}
});
Template.todolistitem.helpers ({
	'done_class' : function() {
		return this.done? 'done':'';
	},
	'donecheckbox' : function () {
		return this.done ? 'checked':'';
	},
	'editingtodo' : function () {
			return Session.get('editingtodo') === this._id;
	},
	'date': function () {
		 	return moment(this.createdAt).fromNow();
	}
});
Template.todolistitem.events({
	'click .removeTodoItem':function(evt,tmp){
		Meteor.call("deleteTodo", this._id);
	},
	'dblclick .todoitem':function(evt,tmp){
		Session.set('editingtodo', this._id);
	},
	'keyup .newtodotxt':function(evt,tmp){
		if(evt.which === 13){
			var txt = tmp.find('.newtodotxt').value;
			if (txt) {
				Meteor.call('updateTodo', this._id, txt);
			}
			Session.set('editingtodo', null);
		}
	},
	'click .check':function(evt,tmp){
		Meteor.call('updateTodoDone', this._id, !this.done);
	}
});
