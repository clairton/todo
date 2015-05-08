import Ember from 'ember';

export default Ember.Controller.extend({
    links: function(){
        var meta = this.store.metadataFor("todo");
        return meta.links;
    }.property()
});
