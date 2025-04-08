import React from 'react'
import Button from "../components/Button.jsx";

const Hero = () => {

    const handleOnClickBtn = () => {
        return alert("Button is clicked");
    }

    return (
        <div>
            <h1>Hero Page</h1>
            <Button description={"Klikni sem!"} onClickBtn={handleOnClickBtn}/>
        </div>
    )
}
export default Hero
