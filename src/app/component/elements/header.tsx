import React from "react";
import "../../style/headerPositionLeft.css"

interface HeaderProps {
    text: string
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <h1 className="az lg:text-4xl md:text-2xl sm:text-xl">{text}</h1>
    )
}