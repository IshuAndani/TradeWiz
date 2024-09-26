import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";
import NavBar from "../Navbar";
import Footer from "../Footer";
function ProductsPage() {
    return (
        <>
            <h1>ProductsPage</h1>
            <NavBar></NavBar>
            <Hero></Hero>
            <LeftSection></LeftSection>
            <RightSection></RightSection>
            <Universe></Universe>
            <Footer></Footer>
        </>
    )
}
export default ProductsPage;