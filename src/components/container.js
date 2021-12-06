import React, { useState } from "react";
import Home from "./Home.js";
import About from "./about.js";
import Footer from "./footer.js";
import Portfolio from "./Portfolio.js";
import Contact from "./contact.js";
import Navigation from "./navigation.js";

export default function Container() {
    const [currentPage, setCurrentPage] = useState("Home");
    const page = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
    };
    const changePage = (data) => setCurrentPage(data);
    return (
        <div>
            <Navigation currentPage={currentPage} changePage={changePage} />
                {page()}
            <Footer />
        </div>
    )
}