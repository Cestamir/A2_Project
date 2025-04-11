import React from 'react'
import Button from "../components/Button.jsx";
import HeroDisplay from "../components/HeroDisplay.jsx";

const Hero = () => {

    const handleOnClickBtn = () => {
        return alert("Button is clicked");
    }

    return (
        <div id="hero" className="hero container">
            <h1>Hero Page</h1>
            <Button description={"Klikni sem!"} onClickBtn={handleOnClickBtn}/>
            <HeroDisplay/>
        </div>
    )
}
export default Hero
