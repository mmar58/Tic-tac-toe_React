import React from "react";

interface HeaderProps {
    text:string
}

export const Header:React.FC<HeaderProps> = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}