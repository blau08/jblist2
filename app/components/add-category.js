import Ember from 'ember';

export default Ember.Component.extend({
  showCategoryForm: false,

  actions: {
    addCategory() {
      this.set('showCategoryForm', true)
    },
    submit() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('saveCategory', params);
      this.set('showCategoryForm', false);
    }
  }
});
