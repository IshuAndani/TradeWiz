import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Stats from "./Stats";
import Hero from "./Hero";
import NavBar from "../Navbar";
import Footer from "../Footer";
import Pricing from "../Pricing";
function HomePage() {
    return (
        <>
            <h1>HomePage</h1>
            <NavBar></NavBar>
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <Footer></Footer>
        </>
    )
}
export default HomePage;