import JpaSerializer from 'ember-jpa-adapter/serializers/jpa';

export default JpaSerializer.extend({
  extractMeta: function(store, type, payload) {
    if (payload && payload.links) {
      store.setMetadataFor(type, {links: payload.links}); 
      delete payload.links;
    }
    return this._super(store, type, payload);
  },
  extractSingle: function(store, typeClass, payload, id, requestType) {
    if (payload && payload.links) {
      //TODO aqui setar os link no model
      console.log(JSON.stringify(payload.links));
    }
    var normalizedPayload = this.normalizePayload(payload);
    return this.normalize(typeClass, normalizedPayload);
  }
});
