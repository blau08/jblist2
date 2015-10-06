// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
        debugger;
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        var params = {
          email: this.get("email"),
          password: this.get("password"),
        };
          this.transitionTo('about');
      });
    },

    signOut: function() {
      this.get("session").close();
    }
  }
});
