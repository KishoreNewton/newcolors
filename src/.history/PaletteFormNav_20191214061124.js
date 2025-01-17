import React, { Component } from 'react'
import classNames from 'classnames'
import PaletteMetaForm from "./PaletteMetaForm"
import {Link} from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core' 
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

const drawerWidth = 400
const styles = theme => ({
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
      navBtns: {
        marginRight: "1rem",
      },
      button: {
          margin: "0 0.5rem"
      },
      link: {
          color: "black",
          textDecoration: "none",
          fontWeight: "700",
          cursor: "pointer",
          fontSize: "18px",
          padding: "1rem",
          margin: "1rem",
          backgroundColor: "Grey"
      }
})

class PaletteFormNav extends Component {
    constructor(props){
        super(props)
        this.state = {newPaletteName: "", formShowing: false}
        this.handleChange = this.handleChange.bind(this)
        this.showForm = this.showForm.bind(this)
    }
    
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    showForm(){
        this.setState({formShowing: true})
    }
  render() {
      const { classes, open, palettes, handleSubmit } = this.props
      const {newPaletteName} = this.state 
    return (
      <div className={classes.root}>
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
                onClick={this.props.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                CREATE YOUR OWN
              </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
              
             <Link to="/" className={classes.link}>BACK</Link>
             <Button variant="contained" color="primary" onClick={this.showForm} className={classes.button}>
              Open form dialog
            </Button>
             </div>
          </AppBar>
          {this.state.formShowing && ( <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} /> )}
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)