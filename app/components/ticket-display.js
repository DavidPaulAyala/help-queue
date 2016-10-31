import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyTicket(ticket) {
      this.sendAction('destroyTicket', ticket);
    }
  }
});
