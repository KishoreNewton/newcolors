import React, { Component } from 'react';
import Palette from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from "./colorHelpers"
import { Router, Route, Switch } from "react-router-dom"
import PalletList from "./PalletList"
import SingleColorPalette from "./SingleColorPalette"
import NewPaletteForm from "./NewPaletteForm"
import { TransitionGroup, CSSTransition } from "react-transition-group"


class App extends Component {
  constructor(props){
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    this.state = { palettes: savedPalettes || seedColors }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
  }

  findPalette(id){
   return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }

  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage)
  }

  syncLocalStorage(){
    //save palettes to local storage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  render(){
    console.log(generatePalette(seedColors[5]))
  return (
    <Route render={() => (
      <TransitionGroup></TransitionGroup>
    <Switch>
    <Route exact path="/create-new-colors" render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes}  {...routeProps} />} />
    <Route path="/palette/:paletteId/:colorId" render={routeProps => (
      <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
    )} />
    <Route exact path="/" render={(routeProps) => <PalletList palettes={this.state.palettes} {...routeProps} />} />
    <Route exact path="/palette/:id" render={routeProps => (
      <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
    )}
    />
    </Switch>
    )} />
  )}
}

export default App
