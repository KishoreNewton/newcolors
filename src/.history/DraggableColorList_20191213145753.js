import React from "react"
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

export default function DraggableColorList(){
    return(
        <div>
            {this.state.colors.map(color => (
                   <DraggableColorBox color={color.color} name={color.name} handleClick={() => this.removeColor(color.name)} key={color.name} /> 
                ))}
        </div>
    )
}