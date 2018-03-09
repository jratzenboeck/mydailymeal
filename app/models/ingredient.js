import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  unit: DS.attr('string'),
  meal: DS.belongsTo('meal')
});
