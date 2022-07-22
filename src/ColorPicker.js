import React from 'react'
import Color from './Color'

export default function ColorPicker({ colors }) {
    return ( 
        colors.map(color => {
            return <Color key={color.id} color={color} />
        })
    )
}