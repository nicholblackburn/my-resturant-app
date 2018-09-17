import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import NoMatch from './components/NoMatch'

const App = () => (
<Fragment>
  <Route exact path="/" component={Home} />
  <Route exact path="/menu" component={Menu} />
  <Route component={NoMatch} />
</Fragment>
);

export default App