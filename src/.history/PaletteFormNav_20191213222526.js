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


export default class PaletteFormNav extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
