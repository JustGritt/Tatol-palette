import React, { useState, useRef, useEffect } from 'react';
import ColorPicker from './ColorPicker';
import { v4 as uuidv4 } from 'uuid';

import "./styles.scss";

const LOCAL_STORAGE_KEY = 'tatol-palette.colors';

function App() {
	const [colors, setColors] = useState([]);
	const hexRef = useRef();

	// Initialize colors from localStorage
	useEffect(() => {
		const storedColors = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		storedColors ? setColors(storedColors) : console.log("No colors stored");
		document.querySelector('.colors-container').style.height = 0;
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(colors));
		document.querySelectorAll(".color-box").forEach(color => {
			color.style.width = `${100 / colors.length+1}%`;
		});
	}, [colors]);

	function addColor() {
		const hex = hexRef.current.value;
		
		if (colors.find(color => color.hex === hex)) 
			return console.error(`The color ${hex} already exists in the palette`);
		
		if(hex.match(/^#[0-9A-F]{6}$/i)) {
			document.querySelector('.colors-container').style.height = '100vh';
			setColors(prevColors => {
				return [...prevColors, { id: uuidv4(), hex: hex, favorite: false }];
			})
		}
	}

	function updateColor(e) {
		hexRef.current.value = e.target.value;
		e.target.style.backgroundColor = e.target.value;
	}

	return ( 
		<>
			<section className="hero flex">
				<h1>Tired of wasting time deciding on the right color to choose?</h1>
				<h2>Just choose a color you like!</h2>
				
				<input type="color" ref={hexRef} onChange={updateColor} />
				<button onClick={addColor} class="flex">Validate Color</button>
			</section>

			<section className="palette">
				<div className="colors-container flex">
					<ColorPicker colors={colors} />
				</div>
			</section>
		</>
	);
}

export default App;