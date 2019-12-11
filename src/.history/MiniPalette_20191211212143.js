import React from 'react'
import { withStyles } from "@material-ui/styles"

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover":{
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "grey",
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",
    },
    miniColor: { 
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5",
    }
}

function MiniPalette(props){
    const { classes, paletteName, emoji, colors } = props
    const miniColorBoxes = colors.map(color => (
        <div style={{backgroundColor: color.color}} className="classes.miniColor" key={color.name}>

        </div>
    ))
    console.log(classes)
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
        <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>    
        </div>
    )
}

export default withStyles(styles)(MiniPalette)