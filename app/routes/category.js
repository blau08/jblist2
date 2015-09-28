import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    saveListing(params) {
      var listing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(listing);
      listing.save().then(function() {
        return category.save();
      });
      this.transitionTo('category');
    },
    delete(category) {
      category.destroyRecord();
      this.transitionTo('index');
    },
    update(category, params) {
      debugger;
      category.set('name', params['name'])
      category.save();
      this.transitionTo('category');
    }
  }
});
