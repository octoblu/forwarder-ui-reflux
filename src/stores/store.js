import Reflux from 'reflux'
import ForwarderActions from '../actions/actions'

const ForwarderStore = Reflux.createStore({
    listenables: [ForwarderActions],
    receiveTypes: function(types) {      
      this.types = types
      this.trigger();
    }
});

export default ForwarderStore
