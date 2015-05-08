import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')//,
  //links: DS.hasMany('link', {polymorphic: true})
});