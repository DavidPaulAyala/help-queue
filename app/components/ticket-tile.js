import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyTicket(ticket) {
      if(confirm("Are You Sure?")) {
        this.sendAction('destroyTicket', ticket);
      }
    },
    
  }
});
