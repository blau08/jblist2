import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    saveCategory(params) {
      var category = this.store.createRecord('category', params);
      category.save();
      this.transitionTo('index');
    }
  }
});
