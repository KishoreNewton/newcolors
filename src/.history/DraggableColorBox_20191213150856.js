import React from 'react'
import { SortableElement } from "react-sortable-hoc"
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

const styles = {
    root: {
            width: "20%",
            height: "25%",
            margin: "0 auto",
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            marginBottom: "-3.9px",
            "&:hover svg": {
                color: "white",
                transform: "scale(1.3)"
            }
        },
        boxContent: {
            position: "absolute",
            width: "100%",
            left: "0px",
            bottom: "0px",
            padding: "10px",
            color: "rgba(0,0,0,0.5)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-between",
        },
        deleteIcon:{
            color: "black",
            transition: "all 0.3s ease-in-out"
        }
    }


const DraggableColorBox = SortableElement((props) {
    const { classes, color, handleClick } = props
    return (
        <div style={{backgroundColor: color}} className={classes.root}>      
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)