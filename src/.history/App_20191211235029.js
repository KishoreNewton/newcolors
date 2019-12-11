import React, { Component } from 'react';
import Palette from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from "./colorHelpers"
import { Router, Route, Switch } from "react-router-dom"
import PalletList from "./PalletList"
import SingleColorPalette from "./SingleColorPalette"


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
    <Route exact path="/" render={(routeProps) => <PalletList palettes={seedColors} {...routeProps} />} />
    <Route exact path="/palette/:id" render={routeProps => (
      <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
    )}
    />
    <Route path="/palette/:paletteId/:colorId" render={() => <h1>Single Color Page</h1>} />
    </Switch>
  )}
}

export default App
