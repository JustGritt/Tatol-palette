import React, { useState, useRef, useEffect } from 'react';
import ColorPicker from './ColorPicker';
import { v4 as uuidv4 } from 'uuid';

import "./styles.scss";

const LOCAL_STORAGE_KEY = 'tatol-palette.colors';

function App() {
	const [colors, setColors] = useState([]);
	const hexRef = useRef();
	const paletteRef = useRef();

	// Initialize colors from localStorage
	useEffect(() => {
		const storedColors = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		storedColors ? setColors(storedColors) : console.log("No colors stored");
		document.querySelector('.colors-container').style.height = 0;
		paletteRef.current.firstChild.childNodes.length > 0 ? paletteRef.current.style.height = "80px" : paletteRef.current.style.height = "0px";
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(colors));
		document.querySelectorAll(".color-box").forEach(color => {
			color.style.width = `${100 / colors.length+1}%`;
		});
	}, [colors]);

	function addColor() {
		const hex = hexRef.current.value;
		
		if (colors.find(color => color.hex === hex) || !hex.match(/^#[0-9A-F]{6}$/i)) {
			return console.error(`The color ${hex} is invalid or already in the palette`);
		} else {
			paletteRef.current.style.height = "80px";
			paletteRef.current.firstChild.style.height = '100vh';
			setColors(prevColors => {
				return [...prevColors, { id: uuidv4(), hex: hex, favorite: false }];
			});
			return console.log(`The color ${hex} was added to the palette`);
		}
	}

	function updateColor(e) {
		document.getElementById('selectedValue').innerHTML = hexRef.current.value = e.target.value;
		e.target.style.backgroundColor = e.target.value;
	}

	function openPalette() {
		paletteRef.current.classList.toggle('open');
	}

	return ( 
		<>
			<section className="hero flex">
				<h1>Tired of wasting time deciding on the right color to choose?</h1>
				<h2>Just choose a color you like!</h2>
				
				<div className="color-selector">
					<input type="color" ref={hexRef} onChange={updateColor} htmlFor="color" />
					<label htmlFor="color" id="selectedValue"></label>
				</div>
				<button onClick={addColor} className="flex">Select Color</button>
			</section>

			<section id="palette-content" className="palette" onClick={openPalette} ref={paletteRef}>
				<div className="colors-container flex">
					<ColorPicker colors={colors} />
				</div>
			</section>
		</>
	);
}

export default App;