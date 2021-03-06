import React from "react";

const style = {
    color: "Blue"
}
function Navigation({ currentPage, changePage }) {
    return (
        <ul className="navList">
            <li className="nav-item">
                <a href="#home" style={style} onClick={() => changePage('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li className="nav-item">
                <a href="#about" style={style} onClick={() => changePage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href="#Portfolio" style={style} onClick={() => changePage('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#Contact" style={style} onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
        </ul>
    )
}
export default Navigation;