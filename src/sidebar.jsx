import React from "react";
import ReactDOM from "react-dom/client";

function EmailInput () {
    return (
        <input type = "text" defaultValue = "Insert email here..." id = "emailInput"></input>
    );
}

function SummariseButton () {
    return (
        <div>
            <button id = 'summariseButton'>Summarise</button><br/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('react-target'));

root.render(
<div>
    <h2>Summarise Email</h2><br/>
    <EmailInput /><br/>
    <SummariseButton /><br/>
</div>);
