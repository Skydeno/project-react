import React from 'react';
import '../App.css';
import './Head.css';

function Head () {
    return (
        <div className="head-container" id='header'>
            <img className='head-background' src='images/img-bckgr.jpg' />
            <h1>SpaceX</h1>
        </div>
    );
}

export default Head;