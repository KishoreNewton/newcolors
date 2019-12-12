import React from 'react'

export default function DraggableColorBox() {
    return (
        <div style={{backgroundCOlor: props.color}}>
            {props.color}
        </div>
    )
}
