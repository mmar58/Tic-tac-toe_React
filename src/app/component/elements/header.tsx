import React from "react";
import "../../style/headerPositionLeft.css"

interface HeaderProps {
    text:string
}

export const Header:React.FC<HeaderProps> = ({text}) => {
    return (
        <div className="az">
            <h1>{text}</h1>
        </div>
    )
}