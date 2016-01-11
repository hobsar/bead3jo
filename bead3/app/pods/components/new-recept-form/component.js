import Ember from 'ember';

export default Ember.Component.extend({
    receptek: Ember.Object.create(),
    
    actions: {
        submit() {
            
            if (!this.validate()) {
                return;
            }
            
            
            this.get('onSave')({
                knev: this.$('#knev').val(),
                kategoria: this.$('#kategoria').val(),
                description: this.$('#description').val(),
                status: 'new'
            });
        }
    },
    
    validate() {
        var knev= this.$('#knev').val();
        var kategoria = this.$('#kategoria').val();
        var description = this.$('#description').val();
        
        this.set('receptek.description', description === '' ? 'Recept leírás kötelező' : '');
        this.set('receptek.knev', knev === '' ? 'Étel nevének kitöltése kötelező' : '');
        this.set('receptek.kategoria', kategoria === '' ? 'Kategoria kitöltése kötelező' : '');
        
        return this.get('receptek.description') === '' && this.get('receptek.knev') === '' && this.get('receptek.kategoria') === '' ;
    }
});
