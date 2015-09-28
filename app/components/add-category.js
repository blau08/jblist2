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
      this.set('name', '');
      this.set('showCategoryForm', false);
      this.sendAction('saveCategory', params);
    }
  }
});
