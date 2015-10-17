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
	insert_client : function(cl) {
		Clients.insert(cl);
	},
	remove_client : function(client_id) {
		Clients.remove(client_id);
	},
	'update_client': function (cl){
		Clients.update({_id:cl._id}, {$set:{name:cl.name, address: cl.address,
		contacts: cl.contacts, city: cl.city}});
	},

	// Equipement methods
	'insert_equipment' : function (equipment) {
		Equipment.insert(equipment);
	},
	'update_equipment' : function (equipment) {
		Equipment.update({_id: equipment._id}, {$set: {type: equipment.type,
			manufacturer: equipment.manufacturer, name: equipment.name, client: equipment.client,
			serial_no: equipment.serial_no, size:equipment.size, install_date: equipment.install_date,
			last_check_date: equipment.last_check_date}
			});
	},
	'remove_equipment' : function (equipment_id) {
		Equipment.remove(equipment_id);
	},

	// Manufacturer Methods
	'insert_manufacturer' : function (el) {
		Manufacturer.insert(el);
	},
	'remove_manufacturer': function(id) {
		Manufacturer.remove(id);
	},
	'update_manufacturer': function(el) {
		Manufacturer.updated({_id: el._id}, {$set:{name: el.name}});
	},

	// Equipment Type Methods
	'insert_equipment_type' : function (el) {
		EquipmentType.insert(el);
	},
	'remove_equipment_type': function(id) {
		EquipmentType.remove(id);
	},
	'update_equipment_type': function(el) {
		EquipmentType.updated({_id: el._id}, {$set:{name: el.name}});
	},

	// Car methods
	'insert_car': function (el) {
		Car.insert(el);
	},
	'remove_car': function (id) {
		Car.remove(id);
	},
	'update_car': function (car){
		Car.update({_id: car._id}, {$set: {plate: car.plate}});
	},
	'get_cars':function (){
		return Car.find();
	}

});
