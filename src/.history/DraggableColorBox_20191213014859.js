import React from 'react'

export default function DraggableColorBox() {
    return (
        <div style={{backgroundColor: props.color}}>
            {props.color}
        </div>
    )
}
