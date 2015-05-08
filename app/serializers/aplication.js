import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  extractMeta: function(store, typeClass, payload) {
    console.log('In extractMeta');
    if (payload && payload.links) {
      store.setMetadataFor(typeClass, { links: payload.links });
      console.log('Set links to metadata '+ JSON.stringify(store.metadataFor(typeClass)));
      delete payload.links;
    }
  }
});
