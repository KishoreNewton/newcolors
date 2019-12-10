import React, { Component } from 'react';
import Palette from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from "./colorHelpers"
import { Router, Route, Switch } from "react-router-dom"
import PalletList from "./PalletList"


class App extends Component {
  findPalette(id){
   return seedColors.find(function(palette){
      return palette.id === id
    })
  }
  render(){
    console.log(generatePalette(seedColors[5]))
  return (
    <Switch>
    <Route exact path="/" render={() => <PalletList />} />
    <Route exact path="/palette/:id" render={routeProps => (
      <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
    )}
    />
    </Switch>
  )}
}

export default App
