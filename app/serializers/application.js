import JpaSerializer from 'ember-jpa-adapter/serializers/jpa';

export default JpaSerializer.extend({
  extractMeta: function(store, type, payload) {
    if (payload && payload.links) {
      store.setMetadataFor(type, {links: payload.links}); 
      delete payload.links;
    }
    return this._super(store, type, payload);
  }
});
