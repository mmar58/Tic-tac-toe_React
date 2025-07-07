import React from "react";

interface TimerProps {
    text:string
}

export const Timer:React.FC<TimerProps> = ({text}) => {

    return(
        <p className="timer">{text}</p>
    )
}