import React from "react";
import ReactDOM from "react-dom/client";
import { Frame } from './frame.js';
import './styles/sidebar.css';

// openai API call params
const MODEL = "gpt-3.5-turbo"
const CHAT_BOT_PRIMER = "You are a secretary for a busy CEO. Your job is to help summarise their emails, highlighting important points, questions, and action items."

// On extension click, render sidebar if it doesn't exist
// Toggle sidebar if already rendered
if (Frame.isReady()) {
  Frame.toggle()
} else {
  boot()
}

function boot() {
    const sidebar = document.createElement('div');
    sidebar.id = 'react-target';
    document.body.appendChild(sidebar);
    const root = ReactDOM.createRoot(document.getElementById('react-target'));
    root.render(<Frame containerChildren={<PopUpContents />}/>);
}

function EmailInput () {
    return (
        <input type = "text" defaultValue = "Insert email here..." className = "emailInput">
        </input>
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
            <h1 class = "summariserTitle">Summarise!</h1><br/>
            <EmailInput/><br/>
            <SummariseButton/>
        </div>
    )
}


async function getOpenAiResponse() {
    // const inputData = req.body.input_data;
    const url = 'https://email-summarizer-server.herokuapp.com/handleOpenAiApiCall'
    const inputData = "Hi Sumer, When can we meet tomorrow? We need to settled on the decision"
    
    fetch(`${url}?input_data=${encodeURIComponent(inputData)}`, {
    method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

console.log(getOpenAiResponse())




