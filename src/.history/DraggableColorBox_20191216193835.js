import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'


const DraggableColorBox = SortableElement((props) => {
    const { classes, color, handleClick } = props
    return (
        <div style={{backgroundColor: color}} className={classes.root}>      
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)