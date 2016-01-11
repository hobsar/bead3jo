import DS from 'ember-data';

const ReceptModel = DS.Model.extend({
  knev: DS.attr('string'),
  status: DS.attr('string'),
  kategoria: DS.attr('string'),
  description: DS.attr('string'),

});

export default ReceptModel;