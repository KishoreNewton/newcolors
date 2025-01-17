import React, { Component } from 'react'
import classNames from 'classnames';
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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"


const drawerWidth = 400

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 64px)",
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });
  
  class NewPaletteForm extends Component {
      constructor(props){
          super(props)
          this.state =  {
              open: true,
              currentColor: " teal",
              newName: "",
              colors: [],
              newPaletteName: "",
          }
          this.updateCurrentColor = this.updateCurrentColor.bind(this)
          this.addNewColor = this.addNewColor.bind(this)
          this.handleChange =this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
      }
      componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
            this.state.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) => 
            this.state.colors.every(
                ({color}) => color !== this.state.currentColor
            )
        );
    }
    state = {
      open: false,
    };
  
    handleDrawerOpen = () => {
      this.setState({ open: true });
    };
  
    handleDrawerClose = () => {
      this.setState({ open: false });
    };

    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex})
    }

    addNewColor(){
        const newColor = { color: this.state.currentColor, name: this.state.newName }
        this.setState({colors: [...this.state.colors, newColor], newName: ""})
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]
        })
    }
    handleSubmit(){
        let newName = "New Test Palette"
        const newPalette = {paletteName: newName, id: newName.toLowerCase().replace(/ /g, "-"), colors: this.state.colors}
        this.props.savePalette(newPalette)
        this.props.history.push("/")
    }
  
    render() {
      const { classes, theme } = this.props;
      const { open } = this.state;
  
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
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Persistent drawer
              </Typography>
              <TextValidator value={this.state.newPaletteName} label="Palette Name" onChange={this.handleChange} />
              <Button variant="contained" color="primary" onClick={this.handleSubmit}>Save Palette</Button>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Typography variant="h4">
                Create Your Colors
            </Typography>
            <div>
                <Button variant="contained" color="secondary" >CLEAR</Button>
                <Button variant="contained" color="primary" >RANDOM</Button>
            </div>    
            <ChromePicker color={this.state.currentColor} onChangeComplete={this.updateCurrentColor} />
            <ValidatorForm onSubmit={this.addNewColor}> 
                <TextValidator  value={this.state.newName} onChange={this.handleChange} validators={["required", "isColorNameUnique", "isColorUnique"]} errorMessages={["this field is required", "Color name must be unique", "Color already taken"]} />
                <Button variant="contained" color="primary" style={{backgroundColor: this.state.currentColor}} type="submit">ADD</Button>
            </ValidatorForm>
            
            
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
                {this.state.colors.map(color => (
                   <DraggableColorBox color={color.color} name={color.name} /> 
                ))}
          </main>
        </div>
      );
    }
  }

  export default withStyles(styles, { withTheme: true })(NewPaletteForm);
