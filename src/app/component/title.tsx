
import React from "react";
interface TitleProps {
    title:string
}

export const Title:React.FC<TitleProps> =({title}) => {
    return(
        <p>{title}</p>
    )
}


