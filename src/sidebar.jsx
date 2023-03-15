import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Switch } from 'react-router-dom';
import { Frame } from './frame.js';
import {MenuData} from './MenuData.js';
import MenuIcon from '@mui/icons-material/Menu';
import { getOpenAiResponse } from './OpenAiService'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
  

const INITIAL_MARGIN = '4%';
const EXPANDED_MARGIN = '18%';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar/>,
    },
    {
      path: "/summarize",
      element: <Summarize/>
    }
]);

// Execution starts here
// Shift the original body and head to make space for sidebar
document.querySelector('body').style.marginLeft = INITIAL_MARGIN
document.querySelector('head').style.marginLeft = INITIAL_MARGIN

boot();

function boot() {
    
    // Add ref to stylesheet sidebar.css
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("./styles/sidebar.css");
    document.getElementsByTagName("head")[0].appendChild(link);

    // Append div, in which sidebar will be rendered, to div.body-wrapper
    const sidebar = document.createElement('div');
    sidebar.id = 'react-target';
    document.body.appendChild(sidebar);

    // Render sidebar
    const root = ReactDOM.createRoot(document.getElementById('react-target'));

    root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    )
}

function Sidebar () {
    return (<Frame containerChildren={<MenuItems />}/>)
}

function Summarize () {
    return (
        <div>Test</div>
    )
}


function MenuItems () {
    const [show, setShow] = React.useState(false)
    function handleMenuClick() {
        setShow(!show);
        Frame.toggle();
        if (!show) {
            document.querySelector('body').style.marginLeft = EXPANDED_MARGIN
            document.querySelector('head').style.marginLeft = EXPANDED_MARGIN
        } else {
            document.querySelector('body').style.marginLeft = INITIAL_MARGIN
            document.querySelector('head').style.marginLeft = INITIAL_MARGIN
        }
    }
    return (
        <div className="sidebar-container">
            <div id='header-container'>
                <div id="app-name-container">
                    <div id='app-name'>INBOX.AI</div>
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




