import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  mealService: service('meal-service'),

  actions: {
    addIngredientToMeal() {
      let meal = this.get('model');
      let ingredient = this.get('store').createRecord('ingredient');
      meal.get('ingredients').pushObject(ingredient);
    },
    saveMeal(meal) {
      this.get('mealService').persistMeal(meal);
    }
  }
});
