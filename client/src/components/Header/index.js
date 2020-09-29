import React from "react";
import "./style.css";

function Header(props){
    return (

      <div className="row mt-5 pb-4 border-bottom mb-4">
            <div className="col-md text-center roboto">
                <h1 className="header">{props.header}</h1>
            </div>
        </div>

    )
}

export default Header;