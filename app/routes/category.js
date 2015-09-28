import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    saveListing(params) {
      var listing = this.store.createRecord('listing', params);
      listing.save();
      this.transitionTo('index');
    }
  }
});
