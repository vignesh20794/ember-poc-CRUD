import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  userId: DS.attr('string'),
  idNum: DS.attr('string')
});
