Meteor.methods({
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
		Lists.update(id,{$set:{title: txt}});
	},
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
  }
});
