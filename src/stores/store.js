import Reflux from 'reflux'
import ForwarderActions from '../actions/actions'

const ForwarderStore = Reflux.createStore({
    listenables: [ForwarderActions],

    receiveTypes: function (types) {
      this.types = types
      this.trigger();
    },

    receiveTypesError: function(error) {
      this.types = null
      this.typesError = error
      this.trigger();
    }
});

export default ForwarderStore
