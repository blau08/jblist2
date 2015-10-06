import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path: "/:category_id"});
  this.route('listing', {path: "/:listing_id"});
  this.route('about', {});
});

export default Router;
