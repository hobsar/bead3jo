import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://restapi-hobsar.c9users.io',
    namespace: ''
});
