import DS from 'ember-data';

export default DS.Model.extend({
  listing: DS.attr(),
  category: DS.belongsTo('category'),
  date: DS.attr(),
  description: DS.attr()
});
