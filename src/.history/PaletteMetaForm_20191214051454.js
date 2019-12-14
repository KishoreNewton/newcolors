import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"


 class PaletteMetaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false, 
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this)
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
    
      render() {
          const {newPaletteName} = this.state
        return (
          <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Open form dialog
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
             
              <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
              <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                    <TextValidator value={newPaletteName} name="newPaletteName" label="Palette Name" onChange={this.handleChange} validators={["required", "isPaletteNameUnique"]} errorMessages={["this field is required", "Palette name must be unique"]} />
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address here. We will send
                  updates occasionally.
                </DialogContentText>
               
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit" >Save Palette</Button>
              </DialogActions>
              </ValidatorForm>
            </Dialog>
          </div>
        );
      }
    }
    
    

export default PaletteMetaForm