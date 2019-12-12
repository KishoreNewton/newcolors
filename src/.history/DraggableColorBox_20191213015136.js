import React from 'react'

const styles = {
    
}

export default function DraggableColorBox(props) {
    return (
        <div style={{backgroundColor: props.color}}>
            {props.color}
        </div>
    )
}
