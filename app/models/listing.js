import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  date: DS.attr(),
  description: DS.attr()
});
