import DS from 'ember-data';

export default DS.Model.extend({
  rel: DS.attr('string'),
  href: DS.attr('string')
});
