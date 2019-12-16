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
    <Route render={({location}) => (
      <TransitionGroup>
      <CSSTransition classNames='fade' timeout={500} key={location.key}>
            <Switch location={location}>
            <Route exact path="/create-new-colors" render={(routeProps) =><Page><NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes}  {...routeProps} /></div> } />
            <Route path="/palette/:paletteId/:colorId" render={routeProps => (
              <Page><SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} /></div>
            )} />
            <Route exact path="/" render={(routeProps) => <Page><PalletList palettes={this.state.palettes} {...routeProps} /> </div>} />
            <Route exact path="/palette/:id" render={routeProps => (
              <Page><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} /> </div>
            )}
            />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
    )} />
  )}
}

export default App
