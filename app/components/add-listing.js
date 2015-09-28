import Ember from 'ember';

export default Ember.Component.extend({
  showListingForm: false,

  actions: {
    addListing() {
      this.set('showListingForm', true)
    },
    submit(category) {
      var params = {
        listing: this.get('listing'),
        date: Date.now(),
        description: this.get('description'),
        category: category
      };
      debugger;
      this.sendAction('saveListing', params);
    }
  }
});
