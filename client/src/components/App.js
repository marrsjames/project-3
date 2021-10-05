import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AllAppointments from '../components/appointments/AllAppointments.js'
import CreateAppointment from '../components/appointments/CreateAppointment.js'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/appointments' component={AllAppointments} />
        <Route exact path='/newappointment' component={CreateAppointment} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
