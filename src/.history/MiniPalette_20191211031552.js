import React from 'react'
import { withStyles } from "@material-ui/styles"

const styles = {
    root: {

    },
    colors: {
        
    }
}

function MiniPalette(props){
    const { classes, name, emoji } = props
    console.log(classes)
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                
            </div>
        <h5 className={classes.title}>{name} <span className={classes.emoji}>{emoji}</span></h5>    
        </div>
    )
}

export default withStyles(styles)(MiniPalette)