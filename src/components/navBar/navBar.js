import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBar.scss";
import terraSplashImage from "../../../data/terraSplash.jpg";

export default function NavBar() {
    const pathname = useLocation().pathname;
    return (
        <nav className="nav-bar">
            <img className="background-image" src={terraSplashImage} />
            <ul>
                <li className="keyboards-and-dice">
                    <a href="https://mysterious-beach-99230.herokuapp.com/">⌨ K&amp;D</a>
                    <a href="https://mysterious-beach-99230.herokuapp.com/" className="abbreviated" aria-hidden>⌨ K&amp;D</a>
                </li>
                <li className="home">
                    <Link to="/">🌍 Terra 2170</Link>
                </li>
                <li className={`card-image-gallery ${pathname.startsWith("/card-image-gallery") ? "is-current-page" : ""}`}>
                    <Link to="/card-image-gallery">Card Image Gallery</Link>
                    <Link to="/card-image-gallery" className="abbreviated" aria-hidden>Gallery</Link>
                </li>
                <li className={`faq ${pathname.startsWith("/faq") ? "is-current-page" : ""}`}>
                    <Link to="/faq">Rules FAQ</Link>
                    <Link to="/faq" className="abbreviated" aria-hidden>FAQ</Link>
                </li>
                <li className={`draft ${pathname.startsWith("/draft") ? "is-current-page" : ""}`}>
                    <Link to="/draft">Draft Now</Link>
                    <Link to="/draft" className="abbreviated" aria-hidden>Draft</Link>
                </li>
            </ul>
        </nav>
    );
}
