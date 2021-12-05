// JavaScript source code
import React, {useRef, useEffect} from 'react';
import './Map.css'

const Map = props => {

	const canvasRef = useRef(null);
	// areaName:  #people, rect(x, y, w, h)
	const r118 = [40, 790, 240, 100, 100];
	const r121 = [13, 910, 240, 80, 90];
	const basketballCourt = [58, 430, 680, 420, 140];
	const weightsL2 = [12, 910, 700, 90, 120];
	const r210 = [3, 485, 920, 110, 80];
	const r215 = [8, 690, 920, 110, 80];
	const jog = [6, 390, 1130, 510, 260];
	const cardio2 = [12, 290, 1200, 90, 170];
	const boxing = [0, 290, 1125, 90, 70];
	const cardio1 = [48, 500, 1430, 280, 100];
	const weightsL3 = [21, 910, 1130, 70, 260];
	const areas = [r118, r121, basketballCourt, weightsL2, r210, r215, jog, cardio2, boxing, cardio1, weightsL3];

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		//Our first draw
		context.globalAlpha = 0.4;
		for(let i = 0; i < areas.length; i++){
			let area = areas[i];
			context.fillStyle = `rgb(${area[0] * 9}, ${256 - area[0] * 9}, 0)`;
			context.fillRect(area[1], area[2], area[3], area[4])
		}

		// // activity room 118
		// context.fillStyle = `rgb(${tar*9}, ${256 - tar*9}, 0)`;
		// context.fillRect(790, 240, 100, 100)
		// // activity room 121
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(910, 240, 80, 90)
		// basketball court
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(430, 680, 420, 140)
		// weights level 2
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(910, 700, 90, 120)
		// r210
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(485, 915, 110, 80)
		// r215
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(690, 920, 110, 80)
		// Jogging walking track
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(390, 1130, 510, 260)
		// cardio2
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(290, 1200, 90, 170)
		// cardio1
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(500, 1430, 280, 100)
		// boxing
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(290, 1125, 90, 70)
		// weight level 3
		// context.fillStyle = `rgb(${15*9}, ${256 - 15*9}, 0)`;
		// context.fillRect(910, 1130, 70, 260)



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