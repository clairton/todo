import JpaAdapter from 'ember-jpa-adapter/adapters/jpa';
import config from '../config/environment';

export default JpaAdapter.extend({
  namespace: config.namespace,
  host: config.host,
  buildURL: function(type, id, snapshot) {
    var url = this._super(type, id, snapshot);
    return url+".json";
  }
});
