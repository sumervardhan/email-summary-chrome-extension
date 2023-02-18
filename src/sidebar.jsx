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

    const sidebar = document.createElement('div');
    sidebar.id = 'react-target';
    document.body.appendChild(sidebar);
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.type = 'text/css';
    // link.href = 'styles/sidebar.css';
    // document.head.appendChild(link);
    const root = ReactDOM.createRoot(document.getElementById('react-target'));

    root.render(<Frame containerChildren={<PopUpContents />}/>);

    // const root = ReactDOM.createRoot(document.getElementById('react-target'));

    // root.render(<Frame containerChildren={<PopUpContents />}/>)
}

function EmailInput () {
    return (
        <input type = "text" defaultValue = "Insert email here..." className = "emailInput"></input>
    );
}

function SummariseButton () {
    return (
        <button className="button-9" role="button">Summarise</button>
    )
}

function PopUpContents () {
    return (
        <div class = "popupContainer">
            <h3 class = "summariserTitle">Summarise!</h3><br/>
            <EmailInput/><br/>
            <SummariseButton/>
        </div>
    )
}



