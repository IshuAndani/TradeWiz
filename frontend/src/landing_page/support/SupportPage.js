import React from "react";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";
import NavBar from "../Navbar";
import Footer from "../Footer";
function SupportPage() {
    return (
        <>
            <h1>SupportPage</h1>
            <NavBar></NavBar>
            <Hero></Hero>
            <CreateTicket></CreateTicket>
            <Footer></Footer>
        </>
    )
}
export default SupportPage;