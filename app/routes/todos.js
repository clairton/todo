import Ember from 'ember';

export default Ember.Route.extend({
  setupController:function(controller, model){
  	console.log(JSON.stringify(model));
  	controller.set('model', model.todos);
  },
  model: function() {
    return this.store.findAll('todo');
  },
  // model: function() {
  //   return Ember.$.getJSON('http://localhost:4200/todos.json');
  //}
});
