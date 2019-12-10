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
            <div></div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)