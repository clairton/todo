import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  buildURL: function(type, id, snapshot) {
    var url = this._super(type, id, snapshot);
    return url+".json";
  }
});
