import React from "react"
import DraggableColorBox from "./DraggableColorBox"
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

 const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return(
        <div style={{height: "100%"}}>
            {colors.map(color => (
                   <DraggableColorBox color={color.color} name={color.name} handleClick={() => removeColor(color.name)} key={color.name} index={i} /> 
                ))}
        </div>
    )
})

export default DraggableColorList