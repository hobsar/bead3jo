import Ember from 'ember';
export default Ember.Controller.extend({
    actions: {
        logUser(formData) {
            $('.modal').modal('hide');
            this.transitionToRoute('receptek.list');
        }
    }
});
