import Component from '@ember/component';

export default Component.extend({
  mealTypes: null,

  init() {
    this._super(...arguments);
    this.mealTypes = ['Sauer', 'Süß'];
  },
  actions: {
    setSelectedMealType(selected) {
      let meal = this.get('meal');
      meal.set('type', selected);
    },
    addIngredient() {
      this.get('onAdd')();
    },
    saveMeal() {
      this.get('onSave')(this.get('meal'));
    }
  },
});
