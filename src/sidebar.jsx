import React from "react";
import ReactDOM from "react-dom/client";
import { Frame } from './frame.js';
import './styles/sidebar.css';

if (Frame.isReady()) {
  Frame.toggle()
} else {
  boot()
}

function boot() {
    const root = ReactDOM.createRoot(document.getElementById('react-target'));

    root.render(<Frame containerChildren={<PopUpContents />}/>)
}

function EmailInput () {
    return (
        <input type = "text" defaultValue = "Insert email here..." id = "emailInput"></input>
    );
}

function SummariseButton () {
    return (
        <button className="button-9" role="button">Summarise</button>
    )
}

function PopUpContents () {
    return (
        <div>
            <EmailInput/><br/>
            <SummariseButton/>
        </div>
    )
}



