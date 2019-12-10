import React from 'react'
import { withStyles } from "@material-ui/styles"

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal"
    }
}

function MiniPalette(props){
    const { classes } = props
    console.log(classes)
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                
            </div>
        <h5 className={classes.ttle}></h5>    
        </div>
    )
}

export default withStyles(styles)(MiniPalette)