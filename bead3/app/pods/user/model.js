import DS from 'ember-data';

const UserModel = DS.Model.extend({
  pw: DS.attr('string'),
  name: DS.attr('string'),
  role: DS.attr('number'),
});


export default UserModel;