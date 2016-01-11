import Ember from 'ember';
export default Ember.Component.extend({
    users: Ember.Object.create(),
    
    actions: {
    
    reg() {
        let store = this.get('targetObject.store');

        var name = this.$('#name').val();
        var pw = this.$('#pw').val();
        
        if(name === '' || pw=== '') {
            this.set('users.name', name === '' ? 'Név kitöltése kötelező' : '');
            this.set('users.pw', pw === '' ? 'Jelszó kitöltése kötelező' : '');
            return;
        }
       
       var hiba = this;
       store.queryRecord('user', { filter: { name: name } }).then(function(person) {
           if(person.length === 0) {
               hiba.get('onSave')({
                   name: name,
                   pw : pw
               });
           } else {
               hiba.set('users.name', 'Foglalt név!');
               hiba.set('users.pw', 'Foglalt név!');
           }
       });
    }
    
    
    }

});
