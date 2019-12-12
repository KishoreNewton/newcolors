import React from 'react'
import {withStyles} from  " @material-ui/styles"

const styles = {

}

export default function DraggableColorBox(props) {
    return (
        <div style={{backgroundColor: props.color}}>
            {props.color}
        </div>
    )
}
