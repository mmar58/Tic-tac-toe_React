import React from "react";

interface ButtonProps {
    text:string
}

export const Button:React.FC<ButtonProps> = ({text}) => {

    const ButtonClick=() => {
        alert('clicked me')
    }
    return(
        <button className="button" type="button" onClick={ButtonClick}>{text}</button>
    )
}