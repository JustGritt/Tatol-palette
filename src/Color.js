import React from 'react'

export default function Color({ color }) {
    return (
        <div id={color.id} className="color-box">
            <label> 
                {color.hex.toUpperCase()}
            </label>
        </div>
    )
}
