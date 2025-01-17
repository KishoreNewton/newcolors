import React, { Component } from 'react'
import classNames from 'classnames'
import PaletteFormNav from "./PaletteFormNav"
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import ColorPickerForm from "./ColorPickerForm"
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Button } from '@material-ui/core' 
import DraggableColorList from "./DraggableColorList"
import { arrayMove } from 'react-sortable-hoc'
import styles from "./styles/NewPaletteFormStyles"
  
  class NewPaletteForm extends Component {
      static defaultProps = {
          maxColors: 20
      }
      constructor(props){
          super(props)
          this.state =  {
              open: true,
              colors: this.props.palettes[0].colors,
          }
          this.addNewColor = this.addNewColor.bind(this)
          this.handleChange =this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
          this.removeColor = this.removeColor.bind(this)
          this.clearColors = this.clearColors.bind(this)
          this.addRandomColor = this.addRandomColor.bind(this)
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

    addNewColor(newColor){
        this.setState({colors: [...this.state.colors, newColor], newColorName: ""})
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(newPalette){
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
        newPalette.colors = this.state.colors
        this.props.savePalette(newPalette)
        this.props.history.push("/")
    }
    
    removeColor(colorName){
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        })
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex)
        }))
    }
    clearColors(){
        this.setState({ colors: [] })
    }
    addRandomColor(){
        const allColors = this.props.palettes.map(p => p.colors).flat()
        let rand = Math.floor(Math.random() * allColors.length)
        const randomColor = allColors[rand]
        this.setState({ colors: [...this.state.colors, randomColor]})
    }

    render() {
      const { classes, theme, maxColors, palettes } = this.props
      const { open, colors } = this.state
      const paletteIsFull = colors.length  >= maxColors
  
      return (
        <div className={classes.root}>
        <PaletteFormNav open={open} palettes={palettes} handleSubmit={this.handleSubmit} handleDrawerOpen={this.handleDrawerOpen} />
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
            <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
                Create Your Colors
            </Typography>
            <div className={classes.buttons}>
                <Button variant="contained" color="secondary" onClick={this.clearColors} className={classes.button} >CLEAR</Button>
                <Button variant="contained" className={classes.button}  color="primary" onClick={this.addRandomColor} disabled={paletteIsFull}>RANDOM</Button>
            </div>    
            <ColorPickerForm paletteIsFull={paletteIsFull} addNewColor={this.addNewColor} colors={colors} />
            </div>
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
                <DraggableColorList axis="xy" colors={colors} removeColor={this.removeColor} onSortEnd={this.onSortEnd} />
          </main>
        </div>
      );
    }
  }

  export default withStyles(styles, { withTheme: true })(NewPaletteForm);
