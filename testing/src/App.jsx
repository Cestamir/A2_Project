import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Loot from "./pages/Loot.jsx";
import Dragon from "./pages/Dragon.jsx";
import Story from "./pages/Story.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Story/>
            <Hero/>
            <Loot/>
            <Dragon/>

        </div>
    )
}
export default App
