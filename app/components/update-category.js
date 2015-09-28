import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  showUpdateForm: false,

  actions: {
    update() {
      this.set('showUpdateForm', true)
    },
    submit(category) {
      var params = {
        name: this.get('name')
      };
      this.sendAction('update', category, params);
      this.set('showUpdateForm', false);
    }
  }
});
