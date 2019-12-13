import React from "react"
import DraggableColorBox from "./DraggableColorBox"
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

export default function DraggableColorList({colors, removeColor}){
    return(
        <div style={{height: "100%"}}>
            {colors.map(color => (
                   <DraggableColorBox color={color.color} name={color.name} handleClick={() => removeColor(color.name)} key={color.name} /> 
                ))}
        </div>
    )
}