Meteor.methods({
	// List methods
	addList: function(txt){
		Lists.insert({
			title: txt,
			owner: Meteor.userId()
		});
	},
	deleteList: function(id){
		Lists.remove(id);
	},
	updateList: function(id, txt) {
		Lists.update(id, {$set:{title: txt}});
	},

	// Todo methods
  addTodo: function(id, txt){
    Todos.insert({
      todotext: txt,
      listid: id,
      createdAt: new Date()
    });
  },
  deleteTodo: function(id) {
    Todos.remove(id);
  },
  updateTodo: function(id, txt) {
    Todos.update(id, {$set:{todotext: txt}});
  },
	updateTodoDone: function(id, done){
			Todos.update(id, {$set:{done:done}});
	},

	// Calendar methods
	'saveCalEvent': function (ce){
		CalEvent.insert(ce);
	},
	'updateCalEvent':function(id, txt){
		CalEvent.update({_id:id}, {$set:{title:txt}});
	},
	'moveEvent' : function (reqEvent){
		return CalEvent.update({_id:reqEvent._id}, {$set:{start:reqEvent.start, end:reqEvent.end}});
	},
	'removeEvent' : function(id) {
			CalEvent.remove(id);
	},

	// Client methods
	insert_client : function(client) {
		Clients.insert(client);
	},
	update_client : function(client) {
		Clients.update({_id:client._id}, {$set:{name:client.name,
									address:client.address, contact_person:client.contact_person,
									email:client.email}});
	},
	remove_client : function(id) {
		Clients.remove(id);
	}

});
