import React from 'react'
import {GiCrystalWand, GiCrystalGrowth, GiAmethyst, GiCutDiamond,GiDiamondRing,GiDiamondTrophy,GiDinosaurEgg,GiDoubleRingedOrb,GiDragonBreath,GiDrinkMe,GiEmerald,Gi3dGlasses,Gi3dHammer} from "react-icons/gi";

const Loot = () => {

    const lootList = [{icon: <GiCrystalWand size={40}/>, name:"Crystal wand"},
        {icon: <GiCrystalGrowth size={40}/>, name:"Crystal"},
        {icon: <GiAmethyst size={40}/>, name: "Amethyst"},
        {icon: <GiCutDiamond size={40}/>, name: "Diamond"},
        {icon: <GiDiamondRing size={40}/>, name: "Ring"},
        {icon: <GiDiamondTrophy size={40}/>, name: "Trophy"},
        {icon: <GiDrinkMe size={40}/>, name: "Potion"},
        {icon: <GiEmerald size={40}/>, name: "Emerald"},
        {icon: <Gi3dGlasses size={40}/>, name: "3Dvision"},
        {icon: <GiDragonBreath size={40}/>, name: "Dragon Breath"},
        {icon: <GiDinosaurEgg size={40}/>, name: "Dino Egg"},
        {icon: <GiDoubleRingedOrb size={40}/>, name: "XxX"},
        {icon: <Gi3dHammer size={40}/>, name: "Hammer Time"},];

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
