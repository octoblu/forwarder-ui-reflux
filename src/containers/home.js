
import React, { Component } from 'react'
import Reflux from 'reflux'
import ForwarderActions from '../actions/actions'
import ForwarderStore from '../stores/store'

import ForwarderList from '../components/ForwarderList'

class Home extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {

    ForwarderStore.listen( () => {
        this.setState({ forwarderTypes: ForwarderStore.types })
    })

    ForwarderActions.fetchTypes()
  }

  render = () => {
    const {forwarderTypes} = this.state
    if(!forwarderTypes) {
        return <h1>No Types yet!</h1>
    }

    const items = _.map(forwarderTypes, (forwarderType, index) => {
      return <li>{forwarderType.name}</li>
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
