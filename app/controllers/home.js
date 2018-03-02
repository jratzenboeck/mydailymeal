import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  mealService: service('meal-service'),

  actions: {
    linkToRandomMeal() {
      let meals = this.get('model');
      let randomMeal = this.get('mealService').getRandomMeal(meals);
      console.log(randomMeal.id);
      this.transitionToRoute('meal', randomMeal.id);
    }
  }
});
