
import React from "react";
interface TitleProps {
    title:string
}

export const Title:React.FC<TitleProps> =({title}) => {
    return(
        <p className="2xl:text-5xl xl:text-4xl lg:text-3xl lg:tracking-widest md:text-2xl sm:text-sm uppercase font-bold">{title}</p>
    )
}


