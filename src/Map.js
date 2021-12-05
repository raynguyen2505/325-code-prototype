// JavaScript source code
import React, {useRef, useEffect} from 'react';
import myMap from "./reccentermap_page-0001.jpg"
import './Map.css'

const Map = props => {

	const canvasRef = useRef(null);
	const tar = 40;
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		//Our first draw
		context.globalAlpha = 0.4;
		// activity room 118
		context.fillStyle = `rgb(${tar*9}, ${256 - tar*9}, 0)`;
		context.fillRect(790, 240, 100, 100)
		// activity room 121
		context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		context.fillRect(910, 240, 80, 90)

	}, [])

	return (
		<div className="Map">
			<canvas ref={canvasRef} width={1275} height={1650} {...props}/>
		</div>
	)
}

export default Map;

// <div className="Map">
// 	<img src={myMap}></img>
// </div>