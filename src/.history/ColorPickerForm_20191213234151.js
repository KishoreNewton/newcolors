import React, { Component } from 'react'
import classNames from 'classnames'
import PaletteFormNav from "./PaletteFormNav"
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from "react-color"
import { Button } from '@material-ui/core' 
import DraggableColorList from "./DraggableColorList"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { arrayMove } from 'react-sortable-hoc'

class ColorPickerForm extends Component {
    constructor(props){
        super(props)
        this.state = {currentColor: "yellow", newColorName: ""}
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
    }
    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex})
    }
  render() {
      const {paletteIsFull} = this.props
    return (
      <div>
        <ChromePicker color={this.state.currentColor} onChangeComplete={this.updateCurrentColor} />
            <ValidatorForm onSubmit={this.addNewColor}> 
                <TextValidator  value={this.state.newColorName} name='newColorName' onChange={this.handleChange} validators={["required", "isColorNameUnique", "isColorUnique"]} errorMessages={["this field is required", "Color name must be unique", "Color already taken"]} />
                <Button variant="contained" color="primary" style={{backgroundColor: paletteIsFull ? "grey" : this.state.currentColor}} type="submit" disabled={paletteIsFull}>ADD</Button>
            </ValidatorForm>
      </div>
    )
  }
}

export default ColorPickerForm