Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function(){
  this.render('home');
  Session.set('page', 0);
});
Router.route('/about', function(){
  if (Meteor.userId()) {
      if (Roles.userIsInRole(Meteor.user(), ['super'])) {
          this.render('about');
          Session.set('page', 1);
      }
      else {
          this.render('home');
          Session.set('page', 0);
      }
  }
});
Router.route('/todo', function(){
  if (Meteor.userId()) {
    this.render('todo');
    Session.set('page', 2);
  }
});
Router.route('/myCalendar', function(){
  if (Meteor.userId()) {
    this.render('calendar');
    Session.set("page", 3);
  }
});
