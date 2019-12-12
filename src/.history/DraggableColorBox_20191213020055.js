import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        ColorBox: {
            width: "20%",
            height: 25%,
            margin: "0 auto",
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            marginBottom: "-3.9px",
        },
    }
}

function DraggableColorBox(props) {
    return (
        <div style={{backgroundColor: props.color}} className={props.classes.root}>
            {props.color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)