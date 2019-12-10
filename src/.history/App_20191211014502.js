import React, { Component } from 'react';
import Palette from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from "./colorHelpers"
import { Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render(){
    console.log(generatePalette(seedColors[5]))
  return (
    <Switch>
    <Route exact path="/" render={() => <h1>okay</h1>} />
    <Route exact path="/palette/:id" render={()} />
    </Switch>
  )}
}

export default App
