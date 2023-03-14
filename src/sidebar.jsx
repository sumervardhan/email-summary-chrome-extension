import React from "react";
import ReactDOM from "react-dom/client";
import { Frame } from './frame.js';
import {MenuData} from './MenuData.js';
import MenuIcon from '@mui/icons-material/Menu';
import { getOpenAiResponse } from './OpenAiService'

boot();

function boot() {
    // Wrap existing body contents in div#body-wrapper
    let body = document.getElementsByTagName('body')[0];
    let wrappedBody = wrapBodyNodesInDiv(body);
    document.body.innerHTML = '';
    document.body.appendChild(wrappedBody);
    
    // Add ref to stylesheet sidebar.css
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("./styles/sidebar.css");
    document.getElementsByTagName("head")[0].appendChild(link);

    // Add div to render sidebar to body
    const sidebar = document.createElement('div');
    sidebar.id = 'react-target';
    document.body.appendChild(sidebar);

    // Render sidebar
    const root = ReactDOM.createRoot(document.getElementById('react-target'));
    var frameRef = React.createRef();
    root.render(<Sidebar/>)

}

function Sidebar () {
    return (<Frame containerChildren={<MenuItems />}/>)
}


function MenuItems () {
    const [show, setShow] = React.useState(false)
    function handleMenuClick() {
        setShow(!show);
        Frame.toggle();
    }
    return (
        <div className="sidebar-container">
            <div id='header-container'>
                <div id="app-name-container">
                    <p id='app-name'>INBOX.AI</p>
                </div>
                <div 
                    id="menu-icon-container"
                    onClick={handleMenuClick}
                >
                    <MenuIcon id="menu-icon"/>
                </div>
            </div>
            <ul className="sidebar-list">
            {MenuData.map((val, key) =>{
                return ( 
                <li 
                className="menu-row"
                id={window.location.pathname == val.link ? "active" : ""}
                key={key} 
                onClick={() => {
                    window.location.pathname = val.link;
                    }}
                >
                    <div id="icon">{val.icon}</div>
                    {show && <div id="title">{val.title}</div>}
                </li>
                );
            })}
            </ul>
        </div>
    )
}


function wrapBodyNodesInDiv(parentNode) {

    let wrapper = document.createElement("div");
    wrapper.id = 'body-wrapper'

    const childNodes = parentNode.childNodes;

    childNodes.forEach(function(x) {
        wrapper.appendChild(x.cloneNode(true))
    })

    return wrapper;
}



