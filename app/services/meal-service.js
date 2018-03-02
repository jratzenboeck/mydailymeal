import Service from '@ember/service';

export default Service.extend({
  getRandomMeal(meals) {
    let randomMealId = Math.round(Math.random() * (meals.length - 1) + 1);
    return meals.findBy('id', randomMealId);
  }
});
