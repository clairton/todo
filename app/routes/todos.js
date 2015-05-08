import Ember from 'ember';

export default Ember.Route.extend({
  // setupController:function(controller, model){
  // 	this._super(controller, model);
  // 	console.log(JSON.stringify(model));
  // 	controller.set('links', model.todos.links);
  // },
  model: function() {
    return this.store.findAll('todo');
  },
  // model: function() {
  //   return Ember.$.getJSON('http://localhost:4200/todos.json');
  //}
});
