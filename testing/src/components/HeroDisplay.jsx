import React, {useState} from 'react'
import {herosList} from '../constants/index.js'
import HeroCard from "./HeroCard.jsx";

const HeroDisplay = () => {


    const [quantity,setQuantity] = useState(herosList.length);

    {/*
    const rotationStyle = {
        transform: `rotateY(calc(((${number}) - 1) * (360 / (${quantity})) * 1deg))`,
    }
    */}

    const getCardStyle = (index) => {
        const cardPosition = (index * (360 / (quantity)))
        return {
            position: 'absolute',
            inset: '0 0 0 0',
            transform: `rotateY(${cardPosition}deg)
            translateZ(400px)`,
        }
    }

    return (
        <div className="hero-display">
            <div className="slider">
                {herosList.map((hero,index) => (
                    <div className="card-item" key={index} style={getCardStyle(index)}>
                        <HeroCard key={index} name={hero.name} type={hero.type} power={hero.power} hp={hero.hp} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HeroDisplay
