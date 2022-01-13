import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  )
}
