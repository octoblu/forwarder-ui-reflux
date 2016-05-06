import reflux from 'reflux'
import superagent from 'superagent'

const DEV_UUID  = 'ffc04cb8-169f-4830-a00e-86ea8dad0101'
const DEV_TOKEN = '0ff20569357e26ed7cfb2a4b76988eb63c245574'

const ForwarderActions = reflux.createActions([
    "fetch",
    "receive",
    "receiveError",

    "fetchTypes",
    "receiveTypes",
    "receiveTypesError",
])

ForwarderActions.fetchTypes.listen( () => {
  superagent
    .get('https://forwarder-service.octoblu.dev/types')
    .auth(DEV_UUID, DEV_TOKEN)
    .end((error, response) => {
      if(error) {
        return ForwarderActions.receiveTypesError(error)
      }
      ForwarderActions.receiveTypes(response.body)
    })
})

export default ForwarderActions
