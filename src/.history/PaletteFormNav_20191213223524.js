import React, { Component } from 'react'
import classNames from 'classnames'
import {Link} from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from "react-color"
import { Button } from '@material-ui/core' 
import DraggableColorBox from "./DraggableColorBox"
import DraggableColorList from "./DraggableColorList"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { arrayMove } from 'react-sortable-hoc'


class PaletteFormNav extends Component {
    constructor(props){
        super(props)
        this.state = {newPaletteName: ""}
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
  render() {
      const { classes, open } = this.props
    return (
      <div>
          <CssBaseline />
          <AppBar
            position="fixed"
            color="default"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Persistent drawer
              </Typography>
              <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator value={this.state.newPaletteName} name="newPaletteName" label="Palette Name" onChange={this.handleChange} validators={["required", "isPaletteNameUnique"]} errorMessages={["this field is required", "Palette name must be unique"]} />
              <Button variant="contained" color="primary" type="submit" >Save Palette</Button>
              </ValidatorForm>
             <Link to="/">BACK</Link>
            </Toolbar>
          </AppBar>
      </div>
    )
  }
}

export default  PaletteFormNav