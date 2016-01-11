import Ember from 'ember';
export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
           var user = this.store.createRecord(
               'user', 
               Object.assign(
                   {
                       name: '',
                       password: ''
                   }, 
                   formData
               )
           );
           user.save();
           $('.modal').modal('hide');
           this.transitionToRoute('receptek.list');
            
        }
    }
});