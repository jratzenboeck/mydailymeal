import Component from '@ember/component';
import ingredient from "../models/ingredient";

export default Component.extend({
  ingredientUnits: null,
  ingredients: null,

  init() {
    this._super(...arguments);
    this.ingredients = [];
    this.ingredientUnits = ['g', 'l', 'kg', 'ml'];
  },

  actions: {
    setSelectedIngredientUnit(selected) {
      let ingredient = this.get('ingredient');
      ingredient.set('unit', selected);
    },
  }
});
