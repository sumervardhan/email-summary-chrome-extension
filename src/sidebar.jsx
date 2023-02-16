import React from "react";
import { render } from "react-dom";

function Sidebar () {
    return (
        <div>
            <h2>Summarise Email</h2>
            <input type = "text" value = "Insert email here..." id = "emailInput"></input>
            <button id="summariseButton">Summarise</button>
        </div>
    );
}

render(<Sidebar />, document.getElementById("react-target"));