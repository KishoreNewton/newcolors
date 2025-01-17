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
        this.state = {currentColor: "yellow", newColorName: "",colors: this.props.palettes[0].colors,}
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
            this.state.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        )
        ValidatorForm.addValidationRule('isColorUnique', value => 
            this.state.colors.every(({ color }) => color !== this.state.currentColor
            )
        )
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
        const newColor = { color: this.state.currentColor, name: this.state.newColorName }
        this.props.addNewColor(newColor)
    }
  render() {
      const {paletteIsFull} = this.props
    return (
      <div>
        <ChromePicker color={this.state.currentColor} onChangeComplete={this.updateCurrentColor} />
            <ValidatorForm onSubmit={this.handleSubmit} ref='form'> 
                <TextValidator  value={this.state.newColorName} name='newColorName' onChange={this.handleChange} validators={["required", "isColorNameUnique", "isColorUnique"]} errorMessages={["this field is required", "Color name must be unique", "Color already taken"]} />
                <Button variant="contained" color="primary" style={{backgroundColor: paletteIsFull ? "grey" : this.state.currentColor}} type="submit" disabled={paletteIsFull}>ADD</Button>
            </ValidatorForm>
      </div>
    )
  }
}

export default ColorPickerForm