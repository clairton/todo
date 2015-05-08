import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractMeta: function(store, type, payload) {
    if (payload && payload.links) {
      store.setMetadataFor(type, { links: payload.links }); 
      delete payload.links;
    }
    return this._super(store, type, payload);
  }
});
