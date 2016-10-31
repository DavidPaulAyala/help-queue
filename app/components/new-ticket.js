import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTicket() {
      var params = {
        pair: this.get('pair'),
        location: this.get('location'),
        description: this.get('description'),
        time: moment().format("dddd, MMMM Do YYYY, h:mm a"),
        timestamp: moment().unix()
      };
      this.sendAction('saveTicket', params);
    },
  }
});
