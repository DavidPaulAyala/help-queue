import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['time:asc'],
  sortedTickets: Ember.computed.sort('ticket', 'sortBy'),

  actions: {
    destroyTicket(ticket) {
      this.sendAction('destroyTicket', ticket);
    }
  }
});
