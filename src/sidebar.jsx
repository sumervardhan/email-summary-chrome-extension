import React from "react";
import ReactDOM from "react-dom/client";
import { Frame } from './frame.js';
import {MenuData} from './MenuData.js';
import MenuIcon from '@mui/icons-material/Menu';
import { getOpenAiResponse } from './OpenAiService'

boot();

function boot() {
    let body = document.getElementsByTagName('body')[0];
    let wrappedBody = wrapBodyNodesInDiv(body);
    document.body.innerHTML = '';
    document.body.appendChild(wrappedBody);
    
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("./styles/sidebar.css");
    document.getElementsByTagName("head")[0].appendChild(link);

    const sidebar = document.createElement('div');
    sidebar.id = 'react-target';
    document.body.appendChild(sidebar);

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
    }
    return (
        <div className="sidebarContainer">
            <button 
                onClick={handleMenuClick}
            >
                <MenuIcon/>
            </button>
            <ul className="sidebarList">
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
                    <div className="icon" id="icon">{val.icon}</div>
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



