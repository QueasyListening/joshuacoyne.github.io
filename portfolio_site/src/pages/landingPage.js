import React from 'react'
import { navigate } from 'gatsby'
import './index.css'
import '../components/layout.css';

import Flower from '../components/Flower/flower.js';
let startBtn = React.createRef();
const plantFlowers = () => {
    const colors = [
        ['goldenrod', 'orangered'],
        ['violet', 'purple'],
        ['navy', 'aqua'],
        ['mediumvioletred', 'palevioletred'],
        ['coral', 'lemonchiffon'],
        ['crimson', 'salmon'],
        ['midnightblue', 'powderblue'],
        ['steelblue', 'deepskyblue'],
        ['aquamarine', 'turquoise']
    ];

    let flowerBed = [];
    
    let height, flowerSize, delay, screenWidth;

    let i = -75;

    if (typeof window !== 'undefined') {
        screenWidth = window.innerWidth;
    }
    
    for (let j = 1; j >= 0; j--) {
        while(i+200 <= screenWidth) {
            let colorSet = colors[Math.floor(Math.random()*(colors.length-1))];
            height = Math.floor(Math.random()*50+50);
            flowerSize = Math.floor(Math.random()*100+50);
            delay = Math.floor(Math.random() * 3000);
            let flowerRef = React.createRef();
            flowerBed.push(<Flower ref={flowerRef} height={height} left={i} bottom={j*150} flowerSize={flowerSize} colorSet={colorSet} delay={delay} key={i}/>);
            i += 150;
        }
        i = 0;
    }
    
    return flowerBed;
}

const flowerBed = plantFlowers();

const start = () => {
    startBtn.current.style.zIndex = '-1';
    startBtn.current.style.opacity = '0';
    flowerBed.forEach(flower => {
        flower.ref.current.grow();
    });

    if (typeof window !== 'undefined') {
        window.setTimeout(() => {
            navigate('/main-page/');
        }, 12000);
    }
}

const LandingPage = () => {
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className='width-100-container'>
                {flowerBed.map(flower => flower)}
            </div>
            <button className='start-btn' ref={startBtn} onClick={start}>Let's get Started!</button>
        </div>
    )

}

export default LandingPage;