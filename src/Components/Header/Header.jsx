import React from "react";

import "./Header.css";

import Logo from "../../Assets/logo.svg";

export default function Header(){

    return(
        <div className="header_background">
            <img src={Logo} alt="Logo"/>
        </div>
    );
}