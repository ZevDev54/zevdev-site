import React from 'react';

import frogShadowed from '../images/logo/FrogWithShadow.png'

export default function Landing() {
    return(
        <>
        
        <div className='whitecard bodytext'>
            <h1 className='bigtext aligncenter'>Welcome!</h1>
        <p className='paragraph centerText'>
            Hello world! <br/>
            My name is Zev, or ZevDev. <br></br>
            I am a young Canadian designer, programmer, and maker. <br/>
            I love designing video games, building electronics, and making things.<br/>
            Welcome to my portfolio website made with ReactJS.</p>
        </div>

        <div className='divAlignCenter'>
        <img alt='' src={frogShadowed} className='landingFrog'></img>
        </div>
        
        </>
    )
};