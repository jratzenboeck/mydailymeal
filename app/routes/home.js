import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    const Meal = EmberObject.extend({
    });

    return [Meal.create({
      id: 1,
      name: 'Chili con Carne',
      type: 'Sauer'
    }), Meal.create({
      id: 2,
      name: 'Palatschinken',
      type: 'Süß'
    }), Meal.create({
      id: 3,
      name: 'Faschiertes',
      type: 'Sauer'
    })];
  }
});
