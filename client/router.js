Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function(){
  this.render('home');
});
Router.route('/about', function(){
  this.render('about');
});
Router.route('/builder', function(){
  this.render('builder');
});
Router.route('/todo', function(){
  this.render('todo');
});
