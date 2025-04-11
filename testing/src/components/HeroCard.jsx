import React from 'react'

const HeroCard = ({name,power,hp,type}) => {

    return (
        <div className="hero-card">
            <h2>{name}</h2>
            <p>{type}</p>
            <p>Attack power: {power}</p>
            <p>Health: {hp}</p>
        </div>
    )
}
export default HeroCard
