import DS from 'ember-data';

export default DS.Model.extend({
  pair: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  time: DS.attr(),
  timestamp: DS.attr()
});
