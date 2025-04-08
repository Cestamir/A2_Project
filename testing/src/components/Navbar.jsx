import React from 'react'
import {GiAllSeeingEye, GiBrickWall} from "react-icons/gi";
import { navList} from "../constants/index.js";

const Navbar = () => {
    return (
        <header className="navigation">
            <nav className="navigation-nav">
                <GiAllSeeingEye size={24}/>
                <div>
                    {navList.map((item) => (
                        <div key={item}>
                            {item}
                        </div>
                    ))}
                </div>
                <GiBrickWall/>
            </nav>
        </header>
    )
}
export default Navbar
