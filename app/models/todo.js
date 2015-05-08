import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: "1",
      title: 'install ember-cli',
      isCompleted: true,
      links:[
      	{
      	  rel: 'save'
      	}
      ]
   }, {
     id: "2",
     title: 'install additional dependencies',
     isCompleted: true,
      links:[
      	{
      	  rel: 'save'
      	}
      ]
    }, {
      id: "3",
      title: 'develop amazing things',
      isCompleted: false,
      links:[
      	{
      	  rel: 'save'
      	}
      ]
  }
]});

export default Todo;