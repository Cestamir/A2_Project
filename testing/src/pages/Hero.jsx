import React from 'react'
import Button from "../components/Button.jsx";
import HeroDisplay from "../components/HeroDisplay.jsx";

const Hero = () => {

    const handleOnClickBtn = () => {
        return alert("Button is clicked");
    }

    return (
        <div id="hero" className="hero container">
            <div className="head-text">
                <h1>BE A HERO OR VILLIAN</h1>
            </div>
            <Button description={"Klikni sem!"} onClickBtn={handleOnClickBtn}/>
            <HeroDisplay/>
        </div>
    )
}
export default Hero
