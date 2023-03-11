import React from "react";
import ReactDOM from "react-dom/client";
import { Frame } from './frame.js';

const starIconSrc = chrome.runtime.getURL('./icons/star.png');
const settingsIconSrc = chrome.runtime.getURL('./icons/settings.png');
const magnifyingGlassIconSrc = chrome.runtime.getURL('./icons/magnifying_glass.png');
const userIconSrc = chrome.runtime.getURL('./icons/user.png');
const websiteIconSrc = chrome.runtime.getURL('./icons/website.png');

// openai API call params
const MODEL = "gpt-3.5-turbo"
const CHAT_BOT_PRIMER = "You are a secretary for a busy CEO. Your job is to help summarise their emails, highlighting important points, questions, and action items."

async function getOpenAiResponse() {
    const url = 'https://email-summarizer-server.herokuapp.com/handleOpenAiApiCall'
    const inputData = document.getElementById("emailInput").value
    fetch(`${url}?input_data=${encodeURIComponent(inputData)}`, {
    method: 'GET'
    })
    .then(response => response.json())
    .then(resJson => {
        document.getElementById('emailInput').value = resJson.data
    })
    .catch(error => {
        console.error(error);
    });
}


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
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("./styles/sidebar.css");
    document.getElementsByTagName("head")[0].appendChild(link);
    document.body.appendChild(sidebar);
    const root = ReactDOM.createRoot(document.getElementById('react-target'));
    root.render(<Frame containerChildren={<PopUpContents />}/>);
}

function EmailInput () {
    return (
        <input type = "text" defaultValue = "Insert email here..." id ="emailInput">
        </input>
    );
}

function SummariseButton () {
    return (
        <button id="summariseButton" role="button" onClick={getOpenAiResponse}>Summarise</button>
    )
}

function ImageComponent({ src, alt }) {
    return (
      <img className = 'summariserIcon314' src={src} alt={alt} />
    );
  }

function PopUpContents () {
    return (
        <div id="sidebarContainer">
            <ImageComponent src={starIconSrc} alt='Summarise'/>
            <ImageComponent src={magnifyingGlassIconSrc} alt='Summary History'/>
            <ImageComponent src={userIconSrc} alt='User'/>
            <ImageComponent src={settingsIconSrc} alt='Settings'/>
            <ImageComponent src={websiteIconSrc} alt='Our Website'/>
        </div>
    )
}









