
import React, { Component } from 'react'
import Reflux from 'reflux'
import ForwarderActions from '../actions/actions'
import ForwarderStore from '../stores/store'

import ForwarderList from '../components/ForwarderList'

class Home extends Component {
  state = {}

  componentDidMount() {

    ForwarderStore.listen( () => {
        this.setState({
          forwarders: {
            types: ForwarderStore.types,
            typesError: ForwarderStore.typesError
          }
        })
    })

    ForwarderActions.fetchTypes()
  }

  render = () => {
    const {forwarders} = this.state
    if(!forwarders) {
        return <h1>No Forwarder information yet!</h1>
    }

    const {typesError, types} = forwarders

    if(typesError) {
      return <h1>Error Loading Forwarder Types!: {typesError.message} </h1>
    }

    if(types.length == 0) {
      return <h1>No types!</h1>
    }

    const items = _.map(types, (type, index) => {
      return <li>{type.name} - {type.forwarderTypeId} </li>
    })

    return (
      <div>
        <h1>Types!!!</h1>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default Home
