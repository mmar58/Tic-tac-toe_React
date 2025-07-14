import React from "react";

interface TimerProps {
    text:string
}

export const Timer:React.FC<TimerProps> = ({text}) => {

    return(
        <p className="timer 2xl:text-5xl xl:text-4xl lg:text-3xl lg:tracking-widest md:text-2xl sm:text-sm">{text}</p>
    )
}