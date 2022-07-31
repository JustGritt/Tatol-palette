import React from 'react'
import removeIcon from './removeItem.svg';
import { uuidv4 } from 'uuid';

function copyColor(e) {
    console.log(e.target.classList.contains('color-box'))
    
    if(e.target.classList.contains('color-box')) {
        const currentcolor = e.target.firstChild.innerText;
        console.log('Copied', currentcolor);
    } else if(e.target.tagName === 'LABEL') {
        const currentcolor = e.target.innerText;
        console.log('Copied', currentcolor); 
    }
}

function removeColor(e) {
    console.log(e.target.parentElement.innerText);
}

export default function Color({ color }) {
    return (
        <div id={color.id} className="color-box flex" style={{ backgroundColor: color.hex }} onClick={copyColor} >
            <label> 
                {color.hex.toUpperCase()}
                <span className="remove" onClick={removeColor}>
                    <img src={removeIcon} alt="remove item" />
                </span>
            </label>
        </div>
    )
}
