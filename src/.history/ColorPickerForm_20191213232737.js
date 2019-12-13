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
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ColorPickerForm