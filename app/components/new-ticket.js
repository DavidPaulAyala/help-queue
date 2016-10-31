import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTicket() {
      var params = {
        pair: this.get('pair'),
        location: this.get('location'),
        description: this.get('description'),
        time: new Date().getTime(),
        timestamp: moment().unix()
      };
      this.sendAction('saveTicket', params);
    },
  }
});
