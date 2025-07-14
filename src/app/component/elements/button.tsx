import React from "react";

interface ButtonProps {
    text:string
    onClick?:()=>void
}

export const Button:React.FC<ButtonProps> = ({text,onClick=()=>{
    alert("Button Clicked")
}}) => {

    return(
        <button className="button " type="button" onClick={onClick}>{text}</button>
    )
}