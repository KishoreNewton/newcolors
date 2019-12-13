import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
            width: "20%",
            height: "25%",
            margin: "0 auto",
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            marginBottom: "-3.9px",
        },
        boxContent: {
            position: "absolute",
            width: "100%",
            left: "0px",
            bottom: "0px",
            padding: "10px",
            color: "black",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-between"
        }
    }


function DraggableColorBox(props) {
    const { classes, color } = props
    return (
        <div style={{backgroundColor: color}} className={classes.root}>      
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <span>x</span>
            </div>
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)