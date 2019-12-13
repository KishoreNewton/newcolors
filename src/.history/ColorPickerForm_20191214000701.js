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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex})
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(){
        const newColor = { color: currentColor, name: newColorName }
        this.props.addNewColor(newColor)
        this.setState({ newColorName: "" })
    }
  render() {
      const {paletteIsFull} = this.props
      const {currentColor, newColorName, currentColor} = this.state
    return (
      <div>
        <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} />
            <ValidatorForm onSubmit={this.handleSubmit} ref='form'> 
                <TextValidator  value={newColorName} name='newColorName' onChange={this.handleChange} validators={["required", "isColorNameUnique", "isColorUnique"]} errorMessages={["this field is required", "Color name must be unique", "Color already taken"]} />
                <Button variant="contained" color="primary" style={{backgroundColor: paletteIsFull ? "grey" : currentColor}} type="submit" disabled={paletteIsFull}>ADD</Button>
            </ValidatorForm>
      </div>
    )
  }
}

export default ColorPickerForm