import React, { Component } from 'react'
import { ChromePicker } from "react-color"
import { Button } from '@material-ui/core' 
import { withStyles } from '@material-ui/core/styles'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem"
    },
 }

class ColorPickerForm extends Component {
    constructor(props){
        super(props)
        this.state = {currentColor: "yellow", newColorName: ""}
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
            this.props.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        )
        ValidatorForm.addValidationRule('isColorUnique', value => 
            this.props.colors.every(({ color }) => color !== this.state.currentColor
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
      const {paletteIsFull, classes} = this.props
      const {currentColor, newColorName} = this.state
    return (
      <div>
        <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} className={classes.picker} />
            <ValidatorForm onSubmit={this.handleSubmit} ref='form'> 
                <TextValidator  value={newColorName} name='newColorName' onChange={this.handleChange} validators={["required", "isColorNameUnique", "isColorUnique"]} errorMessages={["this field is required", "Color name must be unique", "Color already taken"]} />
                <Button variant="contained" color="primary" style={{backgroundColor: paletteIsFull ? "grey" : this.state.currentColor}} type="submit" disabled={paletteIsFull}>ADD</Button>
            </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm)