Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function(){
  this.render('home');
});
Router.route('/about', function(){
  if (Meteor.userId()) {
    this.render('about');
  }
});
Router.route('/builder', function(){
  if (Meteor.userId()) {
    this.render('builder');
  }
});
Router.route('/todo', function(){
  if (Meteor.userId()) {
    this.render('todo');
  }
});
Router.route('/myCalendar', function(){
  if (Meteor.userId()) {
    this.render('calendar');
  }
});
Router.route('/clients', function(){
  if (Meteor.userId()) {
    this.render('clients');
  }
});
Router.route('/equipment', function(){
  if (Meteor.userId()) {
    this.render('equipment');
  }
});
