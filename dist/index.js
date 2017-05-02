Function.prototype.toString = Object.prototype.toString;

Object.prototype.size = function() {
    let size = 0;
    for (let key in this) {
        if (this.hasOwnProperty(key)) size++;
    }
    return size;
};


import React from 'react';
import ReactDOM from 'react-dom';
import { remote, shell } from 'electron';
import App from './components/App';


const main = remote.require('./main.js');


ReactDOM.render(
    <div>
        <App
            platform={main.platform}
            db={main.db}
            path={main.path}
            openWindow={main.openWindow}
            upload={main.upload.openWindow}
            dataToHTML = {main.dataToHTML}
            config={main.config}
            theme={main.theme}
            logout={main.logout.start}
            formatContent = {main.formatContent}
            openURL={shell.openExternal}
        />
    </div>,
    document.getElementById('root')
);
