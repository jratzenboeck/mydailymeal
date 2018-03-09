import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  store: inject(),

  getRandomMeal(meals) {
    let randomMealNumber = Math.round(Math.random() * (meals.get('length') - 1));
    return meals.objectAt(randomMealNumber);
  },
  persistMeal(meal) {
    meal.get('ingredients').forEach((ingredient) =>
      ingredient.save().then(() => meal.save())
    );
  }
});
