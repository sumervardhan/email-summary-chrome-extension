import React from "react";
import ReactDOM from "react-dom/client";
import './styles/sidebar.css';

function EmailInput () {
    return (
        <input type = "text" defaultValue = "Insert email here..." id = "emailInput"></input>
    );
}

function SummariseButton () {
    return (
        <div>
            <button className="button-9" role="button">Summarise</button>
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
