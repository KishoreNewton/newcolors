import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


 class PaletteMetaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            stage: "form",
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.showEmojiPicker = this.showEmojiPicker.bind(this)
        this.savePalette = this.savePalette.bind(this)
    }
     componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleClickOpen = () => {
    this.setState({ open: true });
    }

    handleClose = () => {
    this.setState({ open: false });
    }
    
    showEmojiPicker(){
        this.setState({ stage: "emoji" })
    }

    savePalette(emoji){
        console.log(emoji.native)
        const newPalette = {paletteName: this.state.newPaletteName, emoji: emoji.native}
        this.props.handleSubmit(newPalette)
    }

      render() {
          const {newPaletteName} = this.state
          const { hideForm, handleSubmit } = this.props
        return (
            <div>
            <Dialog open={this.state.stage === "emoji"} onClose={hideForm} >
              <DialogTitle id="form-dialog-title">Palette Emoji</DialogTitle>
              <Picker title='Pick a palette emoji' set='emojione' showSkinTones={false} showPreview={false} onSelect={this.savePalette}  />
            </Dialog>
            <Dialog
              open={this.state.stage === "form"}
              onClose={hideForm}
              aria-labelledby="form-dialog-title"
            >
             
              <DialogTitle id="form-dialog-title">Palette Name</DialogTitle>
              <ValidatorForm onSubmit={this.showEmojiPicker}>
                    <TextValidator value={newPaletteName} name="newPaletteName" label="Enter a unique name" onChange={this.handleChange} margin="normal" fullWidth validators={["required", "isPaletteNameUnique"]} errorMessages={["this field is required", "Palette name must be unique"]} />
              <DialogActions>
                <Button onClick={hideForm} color="primary">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit" >Save Palette</Button>
              </DialogActions>
              </ValidatorForm>
            </Dialog>
            </div>
        )
      }
    }
    
    

export default PaletteMetaForm