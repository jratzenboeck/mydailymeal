import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('meal');
  }
});
