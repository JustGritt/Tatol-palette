import React, { useState, useRef, useEffect } from 'react';
import ColorPicker from './ColorPicker';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'tatol-palette.colors';

function App() {
	const [colors, setColors] = useState([]);
	const hexRef = useRef();

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(colors));
	}, [colors]);

	useEffect(() => {
		const storedColors = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedColors) {
			setColors(storedColors);
		}
	}, []);

	function addColor() {
		const hex = hexRef.current.value;
		console.log(hex);
		
		if (colors.find(color => color.hex === hex)) 
			return console.error(`The color ${hex} already exists in the palette`);
		

		if(hex.match(/^#[0-9A-F]{6}$/i)) {
			setColors(prevColors => {
				return [...prevColors, { id: uuidv4(), hex: hex, favorite: false }];
			})
		}
	}

	return ( 
		<>
			<div className="colors-container">
				<ColorPicker colors={colors} />
			</div>
			
			<input type="color" ref={hexRef} />
			<button onClick={addColor}>Add Color</button>
			<button>Clear Color list</button>
		</>
	);
}

export default App;