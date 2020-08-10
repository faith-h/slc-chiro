import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Services from './components/Services'

const App = () => (
  <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/services' component={Services} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App
