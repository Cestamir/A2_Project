import React from 'react'
import {GiCrystalWand, GiCrystalGrowth, GiAmethyst, GiCutDiamond} from "react-icons/gi";

const Loot = () => {

    const lootList = [{icon: <GiCrystalWand size={40}/>, name:"Crystal wand"},
        {icon: <GiCrystalGrowth size={40}/>, name:"Crystal"},
        {icon: <GiAmethyst size={40}/>, name: "Amethyst"},
        {icon: <GiCutDiamond size={40}/>, name: "Diamond"},];

    return (
        <div id="loot" className="loot container">
            {lootList.map((item,index) => (
                <div className="loot-item" key={index}>
                <h3>{item.name}</h3>
                <div>{item.icon}</div>
                </div>
            ))}
        </div>
    )
}
export default Loot
