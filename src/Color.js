import React from 'react'

function copyColor(e) {
    // console.log(e.target.children[0].innerText);
    console.log(e);

    e.target.tagName === "LABEL" ? navigator.clipboard.writeText(e.target.innerText) : navigator.clipboard.writeText(e.target.children[0].innerText)

    // navigator.clipboard.writeText(e.target.children[0].innerText);
}

export default function Color({ color }) {
    return (
        <div id={color.id} className="color-box flex" style={{ backgroundColor: color.hex }} onClick={copyColor} >
            <label> 
                {color.hex.toUpperCase()}
            </label>
        </div>
    )
}
